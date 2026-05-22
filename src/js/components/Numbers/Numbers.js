export function Numbers() {
  return `
    <section class="numbers container scroll">
      <div class="numbers-title">
        <h2>Números</h2>
      </div>

      <div class="numbers-content">
        <div class="numbers-item">
          <h3>Raposas<img src="/src/assets/icons/fox-icon.svg"/></h3>
          <span>5216</span>
        </div>

        <div class="numbers-item">
          <h3>Esquilos<img src="/src/assets/icons/squirrel-icon.svg"/></h3>
          <span>27612</span>
        </div>

        <div class="numbers-item">
          <h3>Ursos<img src="/src/assets/icons/bear-icon.svg"/></h3>
          <span>2362</span>
        </div>

        <div class="numbers-item">
          <h3>Lobos<img src="/src/assets/icons/wolf-icon.svg"/></h3>
          <span>3627</span>
        </div>

        <div class="numbers-item">
          <h3>Macacos<img src="/src/assets/icons/monkey-icon.svg"/></h3>
          <span>7126</span>
        </div>

        <div class="numbers-item">
          <h3>Leões<img src="/src/assets/icons/lion-icon.svg"/></h3>
          <span>117</span>
        </div>
      </div>
    </section>
  `;
}

export function initNumbersAnimation(event) {
  const numberContainer = document.querySelector('.numbers');
  const numbers = document.querySelectorAll('.numbers-item span');

  function numbersAnimation() {
    if (numberContainer.classList.contains('visible') && numbers.length) {
      numbers.forEach((number) => {
        const total = +number.textContent;
        const increase = Math.floor(total / 50);

        let start = 0;
        const timer = setInterval(() => {
          start += increase;
          number.textContent = start;
          if (start > total) {
            clearInterval(timer);
            number.textContent = total;
          }
        }, 25 * Math.random());
      });
    }
  }

  function watchMutation(mutation) {
    // Pega o target do elemento observado e verifica se possui a determinada classe
    if (mutation[0].target.classList.contains('visible')) {
      observer.disconnect(); // Desconecta o observador para não chamar a função todas as vezes que a classe for "visible" e ocorrer alguma interação
      numbersAnimation(); // Chama a função de animação
    }
  }

  const observer = new MutationObserver(watchMutation);
  observer.observe(numberContainer, { attributes: true });
}
