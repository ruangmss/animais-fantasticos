export function FrequentlyAskedQuestions() {
  return `
    <section class="faq container" id="faq">
      <div class="faq-title">
        <h1>FAQ</h1>
      </div>
      <dl class="faq-content">
        <dt class="question">Os animais são realmente fantásticos?<span>↓</span></dt>
        <dd class="answer">Com certeza! Cada espécie possui habilidades únicas de adaptação, sentidos aguçados e comportamentos sociais complexos que garantem o equilíbrio do ecossistema e nos surpreendem a cada descoberta.</dd>

        <dt class="question">Os animais são raros?<span>↓</span></dt>
        <dd class="answer">A raridade varia drasticamente entre as espécies. Enquanto alguns animais possuem populações vastas, outros são endêmicos de regiões específicas ou enfrentam riscos de extinção, tornando cada encontro com eles uma experiência única.</dd>

        <dt class="question">Qual é a idade média dos animais?<span>↓</span></dt>
        <dd class="answer">A expectativa de vida é muito diversa: enquanto alguns insetos vivem apenas poucos dias, certas espécies de tartarugas e tubarões podem ultrapassar os 200 anos. Em média, mamíferos de grande porte vivem entre 15 e 70 anos.</dd>

        <dt class="question">Como proteger esses animais?<span>↓</span></dt>
        <dd class="answer">A proteção começa com a preservação de seus habitats naturais. Apoiar reservas ecológicas, evitar o consumo de produtos de origem ilegal e reduzir nossa pegada de carbono são passos fundamentais para garantir o futuro dessas espécies.</dd>

        <dt class="question">Como contribuir?<span>↓</span></dt>
        <dd class="answer">Você pode contribuir através de doações para ONGs de conservação, participando de programas de voluntariado ambiental ou simplesmente compartilhando conhecimento para conscientizar mais pessoas sobre a importância da fauna.</dd>
      </dl>
    </section>
  `;
}

export function showAnswers() {
  const questions = document.querySelectorAll(".question");

  if (questions.length) {
    questions.forEach(function (question) {
      question.addEventListener("click", function () {
        /* Seleciona o elemento imediatamente abaixo (dd) e adiciona a classe */
        question.nextElementSibling.classList.toggle("visible");
      });
    });
  }
}
