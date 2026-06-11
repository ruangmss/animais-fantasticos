export function Footer() {
  return `
    <div class="footer-bg scroll">
      <div class="footer container">
        <p class="footer-copy">© <span id="year">2026</span> Animais Fantásticos. Todos os direitos reservados.</p>
      </div>
    </div>
  `;
}

export function initCurrentYear() {
  const yearContent = document.getElementById('year');
  const year = new Date().getFullYear();

  if (yearContent) {
    yearContent.textContent = year;
  }
}
