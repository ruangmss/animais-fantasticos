export function Header() {
  return `
    <div class="header-bg scroll">
      <nav class="header container">
      <div class="header-mobile">

        <div class="header-mobile-left">
          <img src="/src/assets/images/logo.webp" alt="Raposa"/>
          <span>Animais Fantásticos</span>
        </div>

        <button class="header-button" aria-expanded="false">MENU<span class="header-button-symbol">☰</span></button>
      </div>
        <ul class="header-list">
          <button id="close-header-button">X</button>
          <li><a class="header-link" href="#animals">ANIMAIS</a></li>
          <li><a class="header-link" href="#about">SOBRE</a></li>

          <li class="dropdown">
            <a class="header-link" href="#faq">FAQ</a>
            <ul class="dropdown-list">
              <li class="dropdown-item"><a href="#faq">São realmente fantásticos?</a></li>
              <li class="dropdown-item"><a href="#faq">São raros?</a></li>
              <li class="dropdown-item"><a href="#faq">Qual é a média de idade?</a></li>
              <li class="dropdown-item"><a href="#faq">Como proteger?</a></li>
              <li class="dropdown-item"><a href="#faq">Como contribuir?</a></li>
            </ul>
          </li>

          <li><a class="header-link" href="#numbers">NÚMEROS</a></li>
          <li><a class="header-link" href="#contact">CONTATO</a></li>
          <li><a class="header-link" href="#" id="login">LOGIN<span>→</span></a></li>
        </ul>
      </nav>
    </div>

    <div class="menu-overlay"></div>
  `;
}

export function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('.dropdown');

  if (dropdownMenus.length) {
    dropdownMenus.forEach((dropdown) => {
      dropdown.addEventListener('click', manipulateDropdown);
    });

    function manipulateDropdown(event) {
      if (window.innerWidth < 768) {
        return;
      }

      const dropdown = event.currentTarget;
      const dropdownList = dropdown.querySelector('.dropdown-list');
      const insideDropdownList = dropdownList.querySelectorAll('a');

      if (dropdown && dropdownList && insideDropdownList.length) {
        if (!dropdownList.contains(event.target)) {
          event.preventDefault();
        }

        dropdownList.classList.toggle('active');

        function closeDropdown(event) {
          if (!dropdown.contains(event.target)) {
            dropdownList.classList.remove('active');
            document.removeEventListener('click', closeDropdown); // Quando o dropdown é fechado, seu listener do HTML é removido para que não ocorra leak
          }
        }
        document.addEventListener('click', closeDropdown);
      }
    }
  }
}

export function initMobileMenu() {
  const headerButton = document.querySelector('.header-button');
  const symbol = headerButton.querySelector('.header-button-symbol');
  const headerList = document.querySelector('.header-list');
  const closeButton = document.getElementById('close-header-button');
  const menuOverlay = document.querySelector('.menu-overlay');

  if (headerButton && symbol && headerList && closeButton) {
    function manipulateMobileMenu() {
      const headerListElements = headerList.querySelectorAll('*');
      const headerListLinks = headerList.querySelectorAll('a');
      const ariaExpanded = headerButton.getAttribute('aria-expanded');

      if (headerListElements.length && headerListLinks.length && ariaExpanded) {
        if (ariaExpanded === 'false') {
          headerButton.setAttribute('aria-expanded', 'true');
        } else {
          headerButton.setAttribute('aria-expanded', 'false');
        }

        headerList.classList.toggle('mobile');
        symbol.classList.toggle('mobile');

        headerListElements.forEach((element) => {
          element.classList.toggle('mobile');
        });

        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');

        function closeMobileMenu(event) {
          if (
            (!headerList.contains(event.target) && !headerButton.contains(event.target)) ||
            closeButton.contains(event.target)
          ) {
            event.stopPropagation(); // Impossibilita a propagação do bubble, evitando que o clique suba para o HTML

            headerList.classList.remove('mobile');
            symbol.classList.remove('mobile');
            headerButton.setAttribute('aria-expanded', 'false');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');

            headerListElements.forEach((element) => {
              element.classList.remove('mobile');
            });
            document.documentElement.removeEventListener('click', closeMobileMenu);
          }
        }
        document.documentElement.addEventListener('click', closeMobileMenu);

        function autoCloseMobileMenu(event) {
          if (this.contains(event.target)) {
            headerList.classList.remove('mobile');
            symbol.classList.remove('mobile');
            headerButton.setAttribute('aria-expanded', 'false');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');

            headerListElements.forEach((element) => {
              element.classList.remove('mobile');
            });
          }
        }

        headerListLinks.forEach((link) => {
          link.addEventListener('click', autoCloseMobileMenu);
        });

        function fixResizeLayout() {
          const width = window.innerWidth;

          if (width && width > 768) {
            headerList.classList.remove('mobile');
            symbol.classList.remove('mobile');
            headerButton.setAttribute('aria-expanded', 'false');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');

            headerListElements.forEach((element) => {
              element.classList.remove('mobile');
            });
            window.removeEventListener('resize', fixResizeLayout);
          }
        }
        window.addEventListener('resize', fixResizeLayout);
      }
    }

    headerButton.addEventListener('click', manipulateMobileMenu);
  }
}
