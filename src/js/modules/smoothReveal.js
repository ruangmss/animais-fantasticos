export function initSmoothReveal() {
  let elementsToScroll = Array.from(document.querySelectorAll('.scroll')); // Converte em array para ser possível utilizar o .filter

  if (elementsToScroll.length) {
    function smoothReveal() {
      elementsToScroll = elementsToScroll.filter((element) => {
        const imaginaryLine = element.classList.contains('footer-bg')
          ? window.innerHeight * 0.97
          : window.innerHeight * 0.9;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop <= imaginaryLine) {
          element.classList.add('visible');
          return false; // Deixa de ser um elemento a ser revelado
        }

        return true; // Mantém sendo um elemento a ser revelado
      });

      // Se não houver mais elementos para revelar, remove os listeners
      if (!elementsToScroll.length) {
        window.removeEventListener('scroll', smoothReveal);
      }
    }

    smoothReveal(); // Chama a função para já ocorrer a primeira revelação sem necesistar do evento de scroll
    window.addEventListener('scroll', smoothReveal);
  }
}
