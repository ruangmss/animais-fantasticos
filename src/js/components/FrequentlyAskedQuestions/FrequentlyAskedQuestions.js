export function FrequentlyAskedQuestions() {
  return `
    <section class="faq container scroll" id="faq">
      <div class="faq-title">
        <h2>FAQ</h2>
      </div>
      
      <div class="faq-content">
        <button type="button" class="question"><span>Os animais são realmente fantásticos?<span>↓</span></span></button>
        <p class="answer">Com certeza! Cada espécie possui habilidades únicas de adaptação, sentidos aguçados e comportamentos sociais complexos que garantem o equilíbrio do ecossistema e nos surpreendem a cada descoberta.</p>

        <button type="button" class="question"><span>Os animais são raros?<span>↓</span></span></button>
        <p class="answer">A raridade varia drasticamente entre as espécies. Enquanto alguns animais possuem populações vastas, outros são endêmicos de regiões específicas ou enfrentam riscos de extinção, tornando cada encontro com eles uma experiência única.</p>

        <button type="button" class="question"><span>Qual é a idade média dos animais?<span>↓</span></span></button>
        <p class="answer">A expectativa de vida é muito diversa: enquanto alguns insetos vivem apenas poucos dias, certas espécies de tartarugas e tubarões podem ultrapassar os 200 anos. Em média, mamíferos de grande porte vivem entre 15 e 70 anos.</p>

        <button type="button" class="question"><span>Como proteger esses animais?<span>↓</span></span></button>
        <p class="answer">A proteção começa com a preservação de seus habitats naturais. Apoiar reservas ecológicas, evitar o consumo de produtos de origem ilegal e reduzir nossa pegada de carbono são passos fundamentais para garantir o futuro dessas espécies.</p>

        <button type="button" class="question"><span>Como contribuir?<span>↓</span></span></button>
        <p class="answer">Você pode contribuir através de doações para ONGs de conservação, participando de programas de voluntariado ambiental ou simplesmente compartilhando conhecimento para conscientizar mais pessoas sobre a importância da fauna.</p>
      </div>
    </section>
  `;
}

export function initAccordionList() {
  const questions = document.querySelectorAll('.question');

  if (questions.length) {
    function accordionList() {
      this.nextElementSibling.classList.toggle('visible');
    }

    questions.forEach((question) => {
      question.addEventListener('click', accordionList);
    });
  }
}
