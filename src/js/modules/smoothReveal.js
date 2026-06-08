export function initSmoothReveal() {
  const elementsToScroll = document.querySelectorAll('.scroll');

  if (elementsToScroll.length) {
    function smoothReveal() {
      elementsToScroll.forEach((element) => {
        let imaginaryLine = 0;

        const elementTop = element.getBoundingClientRect().top;
        if (element.classList.contains('footer-bg')) {
          imaginaryLine = window.innerHeight * 0.97;
        } else {
          imaginaryLine = window.innerHeight * 0.9; // Quando o elemento chega em 90% de distância do topo da tela é exibido, ou seja, numa linha imáginária 10% acima da borda inferior visível
        }

        if (elementTop <= imaginaryLine) {
          element.classList.add('visible');
        }
      });
    }
    smoothReveal(); // Chama a função imediatamente para que ela não dependa do scroll inicial do usuário
    window.addEventListener('scroll', smoothReveal);
  }
}
