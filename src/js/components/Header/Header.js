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
          <li><a class="header-link" href="#gallery">GALERIA</a></li>
          <li><a class="header-link" href="#contact">CONTATO</a></li>
          <li><a class="header-link" href="#" id="login">LOGIN<span>→</span></a></li>
        </ul>
      </nav>
    </div>

    <div class="menu-overlay"></div>
  `;
}

export function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('.dropdown');
  let activeDropdown = null;

  function closeDropdown(event) {
    if (!activeDropdown || activeDropdown.contains(event.target)) {
      return;
    }

    const dropdownList = activeDropdown.querySelector('.dropdown-list');

    if (dropdownList) {
      dropdownList.classList.remove('active');
    }

    activeDropdown = null;
    document.removeEventListener('click', closeDropdown);
  }

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
      const insideDropdownList = dropdownList ? dropdownList.querySelectorAll('a') : [];

      if (dropdown && dropdownList && insideDropdownList.length) {
        if (!dropdownList.contains(event.target)) {
          event.preventDefault();
        }

        if (activeDropdown && activeDropdown !== dropdown) {
          const activeDropdownList = activeDropdown.querySelector('.dropdown-list');

          if (activeDropdownList) {
            activeDropdownList.classList.remove('active');
          }
        }

        dropdownList.classList.toggle('active');
        activeDropdown = dropdownList.classList.contains('active') ? dropdown : null;

        document.removeEventListener('click', closeDropdown);

        if (activeDropdown) {
          document.addEventListener('click', closeDropdown);
        }
      }
    }
  }
}

export function initMobileMenu() {
  const headerButton = document.querySelector('.header-button');
  const symbol = headerButton ? headerButton.querySelector('.header-button-symbol') : null;
  const headerList = document.querySelector('.header-list');
  const closeButton = document.getElementById('close-header-button');
  const menuOverlay = document.querySelector('.menu-overlay');
  const transitionDuration = 500;
  let closeTimer = null;

  if (headerButton && symbol && headerList && closeButton && menuOverlay) {
    const headerListElements = headerList.querySelectorAll('*');
    const headerListLinks = headerList.querySelectorAll('a');

    function clearCloseTimer() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    }

    function closeMobileMenu() {
      clearCloseTimer();

      headerList.classList.remove('mobile');
      symbol.classList.remove('mobile');
      headerButton.setAttribute('aria-expanded', 'false');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');

      headerListElements.forEach((element) => {
        element.classList.remove('mobile');
      });

      document.documentElement.removeEventListener('click', closeMobileMenuOnOutsideClick);
      window.removeEventListener('resize', closeMobileMenuOnDesktop);

      closeTimer = setTimeout(() => {
        if (headerButton.getAttribute('aria-expanded') === 'false') {
          headerList.classList.remove('opened');
        }

        closeTimer = null;
      }, transitionDuration);
    }

    function openMobileMenu() {
      clearCloseTimer();

      headerList.classList.add('opened');
      headerButton.setAttribute('aria-expanded', 'true');

      requestAnimationFrame(() => {
        if (headerButton.getAttribute('aria-expanded') !== 'true') {
          return;
        }

        headerList.classList.add('mobile');
        symbol.classList.add('mobile');
        menuOverlay.classList.add('active');
        document.body.classList.add('menu-open');

        headerListElements.forEach((element) => {
          element.classList.add('mobile');
        });
      });

      document.documentElement.addEventListener('click', closeMobileMenuOnOutsideClick);
      window.addEventListener('resize', closeMobileMenuOnDesktop);
    }

    function closeMobileMenuOnOutsideClick(event) {
      if (
        (!headerList.contains(event.target) && !headerButton.contains(event.target)) ||
        closeButton.contains(event.target)
      ) {
        closeMobileMenu();
      }
    }

    function closeMobileMenuOnLinkClick(event) {
      if (event.currentTarget.contains(event.target)) {
        closeMobileMenu();
      }
    }

    function closeMobileMenuOnDesktop() {
      if (window.innerWidth > 768) {
        headerList.classList.remove('opened');
        closeMobileMenu();
      }
    }

    function manipulateMobileMenu() {
      const isOpened = headerButton.getAttribute('aria-expanded') === 'true';

      if (isOpened) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }

    headerListLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenuOnLinkClick);
    });

    closeButton.addEventListener('click', closeMobileMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);
    headerButton.addEventListener('click', manipulateMobileMenu);
  }
}
