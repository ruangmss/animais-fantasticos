export function Slides() {
  return `
    <section class="slides container scroll">
      <ul class="slides-list">
       <li><img src="/src/assets/images/fox-slide.webp" alt="Raposa" draggable="false" /></li>
       <li><img src="/src/assets/images/squirrel-slide.webp" alt="Esquilo" draggable="false" /></li>
       <li><img src="/src/assets/images/bear-slide.webp" alt="Urso" draggable="false" /></li>
       <li><img src="/src/assets/images/wolf-slide.webp" alt="Lobo" draggable="false" /></li>
       <li><img src="/src/assets/images/monkey-slide.webp" alt="Macaco" draggable="false" /></li>
       <li><img src="/src/assets/images/lion-slide.webp" alt="Leão" draggable="false" /></li>
      </ul>

      <div class="slides-buttons">
        <button id="prev" type="button">◀</button>
        <button id="next" type="button">▶</button>
      </div>
    </section>
  `;
}

export function initMousedownManipulation() {
  const slidesContainer = document.querySelector('.slides');
  const slidesList = document.querySelector('.slides-list');

  if (slidesContainer && slidesList) {
    const distance = { startX: 0, currentX: 0, finalPosition: 0 };

    function moveSlide(position) {
      slidesList.style.transform = `translate3d(${position}px, 0, 0)`;
    }

    function onMove(event) {
      distance.currentX = event.clientX;

      const movement = distance.startX - distance.currentX;
      const position = distance.finalPosition - movement; // Pega a posição final atual e decrementa o movimento

      moveSlide(position); // Aplica o transform
    }

    function getLimits() {
      return {
        max: 0,
        min: slidesContainer.offsetWidth - slidesList.scrollWidth, // Largura visível - Largura total do container
      };
    }

    function onEnd(event) {
      const movement = distance.startX - event.clientX;
      const limits = getLimits();

      distance.finalPosition -= movement; // Salva a posição final do carrossel

      if (distance.finalPosition > limits.max) {
        distance.finalPosition = limits.max;
      } else if (distance.finalPosition < limits.min) {
        distance.finalPosition = limits.min;
      }

      moveSlide(distance.finalPosition); // Chama novamente para garantir que os limites não serão ultrapassados

      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
    }

    slidesContainer.addEventListener('mousedown', (event) => {
      event.preventDefault();

      distance.startX = event.clientX;

      window.addEventListener('mousemove', onMove); // Eventos adicionados ao window para que funcionem caso o usuário saia do container de slides com o evento ativo
      window.addEventListener('mouseup', onEnd); // Eventos adicionados ao window para que funcionem caso o usuário saia do container de slides com o evento ativo
    });
  }
}
