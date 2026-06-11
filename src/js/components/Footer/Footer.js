export function Footer() {
  const year = new Date().getFullYear();

  return `
    <div class="footer-bg scroll">
      <div class="footer container">
        <p class="footer-copy">© ${year} Animais Fantásticos. Todos os direitos reservados.</p>
      </div>
    </div>
  `;
}
