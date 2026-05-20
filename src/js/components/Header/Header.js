export function Header() {
  return /* html */ `
    <div class="header-bg scroll">
      <nav class="header container">
        <button class="header-button" aria-expanded="false">MENU<span class="header-button-symbol">☰</span></button>
        <ul class="header-list">
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

          <li><a class="header-link" href="#contact">CONTATO</a></li>
          <li><a class="header-link" href="#" id="login">LOGIN<span>→</span></a></li>
        </ul>
      </nav>
    </div>
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

export function initMobileMenu() {
  const headerButton = document.querySelector('.header-button');
  const symbol = headerButton.querySelector('.header-button-symbol');
  const headerList = document.querySelector('.header-list');

  if (headerButton && symbol && headerList) {
    function manipulateMobileMenu() {
      const headerListElements = headerList.querySelectorAll('*');
      const ariaExpanded = headerButton.getAttribute('aria-expanded');

      if (headerListElements.length && ariaExpanded) {
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

        function closeMobileMenu(event) {
          if (!headerList.contains(event.target) && !headerButton.contains(event.target)) {
            event.stopPropagation(); // Impossibilita a propagação do bubble, evitando que o clique suba para o HTML

            headerList.classList.remove('mobile');
            symbol.classList.remove('mobile');
            headerButton.setAttribute('aria-expanded', 'false');

            headerListElements.forEach((element) => {
              element.classList.remove('mobile');
            });
            document.documentElement.removeEventListener('click', closeMobileMenu);
          }
        }
        document.documentElement.addEventListener('click', closeMobileMenu);

        function fixResizeLayout() {
          const width = window.innerWidth;

          if (width > 768) {
            headerList.classList.remove('mobile');
            symbol.classList.remove('mobile');
            headerButton.setAttribute('aria-expanded', 'false');

            headerListElements.forEach((element) => {
              element.classList.remove('mobile');
            });
          }
        }
        window.addEventListener('resize', fixResizeLayout);
      }
    }

    headerButton.addEventListener('click', manipulateMobileMenu);
  }
}
