// Função criada somente para fins de aprendizado, tendo em vista que o atributo "scroll-behavior" com valor "smooth" já realiza a função de scroll suave
export function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  if (anchors.length) {
    function scrollToAnchor(event) {
      event.preventDefault(); // Previne o salto para o conteúdo
      const anchor = event.currentTarget.getAttribute('href'); // Pega o atributo href
      const content = document.querySelector(anchor); // Seleciona o conteúdo

      if (content) {
        content.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', scrollToAnchor);
    });
  }
}
