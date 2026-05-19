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
              <li class="dropdown-item"><a href="#">São realmente fantásticos?</a></li>
              <li class="dropdown-item"><a href="#">São raros?</a></li>
              <li class="dropdown-item"><a href="#">Qual é a média de idade?</a></li>
              <li class="dropdown-item"><a href="#">Como proteger?</a></li>
              <li class="dropdown-item"><a href="#">Como contribuir?</a></li>
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
  const dropdownMenus = document.querySelectorAll(".dropdown");

  if (dropdownMenus.length) {
    dropdownMenus.forEach((dropdown) => {
      dropdown.addEventListener("click", showDropdown);
      dropdown.addEventListener("touchstart", showDropdown); // Padrão de click sem delay para mobile, pois no mobile os browsers demoram 300ms para adicionarem o evento
    });

    function showDropdown(event) {
      const dropdownList = this.querySelector(".dropdown-list");
      dropdownList.classList.toggle("active");
    }
  }
}
