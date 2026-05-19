export function Header() {
  return /* html */ `
    <div class="header-bg scroll">
      <nav class="header container">
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
      const insideDropdownList = dropdownList.querySelectorAll('a[href^="#"]');

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
