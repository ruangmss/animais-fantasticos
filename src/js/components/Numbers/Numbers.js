export function Numbers() {
  return `
    <section class="numbers container scroll" id="numbers">
      <div class="numbers-title">
        <h2>Números</h2>
      </div>

      <div class="numbers-content">

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

export function initFetchAnimals() {
  try {
    async function fetchAnimals(url) {
      const animalsResponse = await fetch(url); // Retorna um Response
      const animalsJson = await animalsResponse.json(); // Retorna o JSON do Response
      const numbersContainer = document.querySelector('.numbers-content');

      animalsJson.forEach((animal) => {
        const element = document.createElement('div');
        element.classList.add('numbers-item');
        element.innerHTML = `
      <div class="numbers-item-header">
        <h3>${animal.species}</h3>
        <img src='${animal.icon}' alt='${animal.iconAlt}'/>
      </div>
      <span>${animal.total}</span>`;

        numbersContainer.appendChild(element);
      });

      initNumbersAnimation(); // Chama a animação apenas após o fetch, pois ela estava ocorrendo antes de já haver dados, operando incorretamente
    }

    fetchAnimals('/src/js/services/api.json');
  } catch (error) {
    console.log('Erro: ', error);
  }
}
