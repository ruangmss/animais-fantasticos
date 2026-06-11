export function Slides() {
  return `
    <section class="slides container scroll">
      <div class="slides-title">
        <h2>Galeria</h2>
      </div>

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
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  if (slidesContainer && slidesList && prevButton && nextButton) {
    const distance = { startX: 0, currentX: 0, finalPosition: 0 };
    const slides = slidesList.querySelectorAll('li');

    if (!slides) {
      return;
    }

    slides[0].classList.add('active');

    function activeSlide(position) {
      slides.forEach((slide) => {
        slide.classList.remove('active');

        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2 + position;
        const containerCenter = slidesContainer.offsetWidth / 2;

        if (
          slideCenter > containerCenter - slide.offsetWidth / 2 &&
          slideCenter < containerCenter + slide.offsetWidth / 2
        ) {
          slide.classList.add('active');
        }
      });
    }

    function moveSlide(position) {
      slidesList.style.transform = `translate3d(${position}px, 0, 0)`;
      activeSlide(position);
    }

    function positionActiveSlide() {
      const activeSlide = slidesList.querySelector('.active');

      if (activeSlide) {
        let position = 0;

        if (activeSlide === slides[0]) {
          position = 0;
        } else if (activeSlide === slides[slides.length - 1]) {
          position = slidesContainer.offsetWidth - slidesList.scrollWidth;
        } else {
          const containerCenter = slidesContainer.offsetWidth / 2;

          const activeCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2 + distance.finalPosition;

          position = distance.finalPosition + (containerCenter - activeCenter);
        }

        moveSlide(position);
        distance.finalPosition = position;
      }
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
      positionActiveSlide(); // Centraliza o slide
      toggleButtonsVisibility();

      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
    }

    slidesContainer.addEventListener('mousedown', (event) => {
      event.preventDefault();

      distance.startX = event.clientX;

      window.addEventListener('mousemove', onMove); // Eventos adicionados ao window para que funcionem caso o usuário saia do container de slides com o evento ativo
      window.addEventListener('mouseup', onEnd); // Eventos adicionados ao window para que funcionem caso o usuário saia do container de slides com o evento ativo
    });

    function setActiveSlide(index) {
      if (index < 0 || index >= slides.length) {
        return;
      }

      slides.forEach((slide) => {
        slide.classList.remove('active');
      });

      slides[index].classList.add('active');

      positionActiveSlide();
      toggleButtonsVisibility();
    }

    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        setActiveSlide(index);
      });
    });

    function getActiveIndex() {
      const currentActive = slidesList.querySelector('.active');
      return Array.from(slides).indexOf(currentActive);
    }

    function toggleButtonsVisibility() {
      const activeIndex = getActiveIndex();

      if (activeIndex === 0) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'block';
      } else if (activeIndex === slides.length - 1) {
        prevButton.style.display = 'block';
        nextButton.style.display = 'none';
      } else {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
      }
    }

    // Lógica do botão de retorno
    prevButton.addEventListener('click', () => {
      const activeIndex = getActiveIndex();
      setActiveSlide(activeIndex - 1);
    });

    // Lógica do botão de avanço
    nextButton.addEventListener('click', () => {
      const activeIndex = getActiveIndex();
      setActiveSlide(activeIndex + 1);
    });

    toggleButtonsVisibility();
  }
}
