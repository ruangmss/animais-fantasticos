export function Animals() {
  return `
    <section class="animals container" id="animals">
      <div class="animals-title">
        <h1>Animais Fantásticos</h1>
      </div>

      <div class="animals-content">
        <div class="animals-images">
          <img src="/src/assets/images/fox.webp" tabindex="0"/>
          <img src="/src/assets/images/squirrel.webp" tabindex="0"/>
          <img src="/src/assets/images/bear.webp" tabindex="0"/>
          <img src="/src/assets/images/wolf.webp" tabindex="0"/>
          <img src="/src/assets/images/monkey.webp" tabindex="0"/>
          <img src="/src/assets/images/lion.webp" tabindex="0"/>
        </div>

        <div class="animals-texts">
          <div class="animal">
            <h2>RAPOSA</h2>
            <p>
              A raposa é um mamífero da família dos canídeos, conhecida por sua extrema inteligência e versatilidade. Possui uma pelagem densa e uma cauda felpuda que ajuda no equilíbrio e no aquecimento durante o inverno.
            </p> 

            <p>
              Sua alimentação é onívora, permitindo que ela se adapte a diversos ecossistemas, desde florestas densas até áreas urbanas. É um animal de hábitos predominantemente noturnos e solitários, destacando-se por seus sentidos aguçados.
            </p> 

            <p>
              Sua capacidade de desaparecer rapidamente entre a vegetação a torna um dos predadores mais discretos da natureza.
            </p> 
          </div>

          <div class="animal">
            <h2>ESQUILO</h2>
            <p>
              O esquilo é um roedor de pequeno porte, famoso por sua agilidade e pelo hábito de armazenar sementes e nozes em diferentes esconderijos. Essa característica o torna um importante agente no reflorestamento natural.
            </p> 

            <p>
              Com garras afiadas e uma visão periférica excelente, ele consegue escalar árvores com facilidade para fugir de predadores. Sua cauda longa e peluda não serve apenas para o equilíbrio, mas também para a comunicação visual.
            </p>

            <p>
              Existem centenas de espécies espalhadas pelo mundo, adaptadas tanto a climas tropicais quanto temperados. São animais extremamente ativos durante o dia, sempre em busca de alimento para garantir sua sobrevivência.
            </p> 
          </div>

          <div class="animal">
            <h2>URSO</h2>
            <p>
              O urso é um dos maiores carnívoros terrestres, possuindo uma estrutura física imponente e grande força muscular. Apesar do tamanho, são animais surpreendentemente velozes e excelentes nadadores em diversas espécies.
            </p> 

            <p>
              A maioria dos ursos possui uma dieta variada, alimentando-se de frutas, mel, peixes e pequenos mamíferos. Durante o inverno, muitas espécies entram em um estado de dormência profunda para conservar energia e sobreviver à escassez de alimentos.
            </p> 

            <p>
              Eles são animais geralmente solitários, com um olfato muito mais desenvolvido que o dos cães. Sua presença nos ecossistemas é vital, pois ajudam no controle populacional de outras espécies e na dispersão de sementes.
            </p> 
          </div>

          <div class="animal">
            <h2>LOBO</h2>
            <p>
              O lobo é um animal social por excelência, vivendo em alcateias hierarquizadas que garantem a proteção e a eficiência na caça. É conhecido por sua resistência física, sendo capaz de percorrer longas distâncias em um único dia.
            </p> 

            <p>
              A comunicação entre os membros do grupo é feita através de expressões corporais, odores e o icônico uivo, que serve para reunir a alcateia ou marcar território. São caçadores estratégicos que trabalham em total sincronia.
            </p> 

            <p>
              Apesar de cercado por mitos, o lobo desempenha um papel ecológico fundamental como predador de topo. Sua presença ajuda a manter o equilíbrio das populações de herbívoros, garantindo a saúde das florestas onde habita.
            </p> 
          </div>

          <div class="animal">
            <h2>MACACO</h2>
            <p>
              Os macacos são primatas conhecidos por sua alta capacidade cognitiva e comportamentos sociais complexos. Eles possuem membros adaptados para a vida arbórea, permitindo movimentos ágeis e precisos entre os galhos das árvores.
            </p> 

            <p>
              Sua dieta é flexível, composta majoritariamente por frutas, folhas e insetos. A interação dentro dos grupos envolve cuidados mútuos e brincadeiras, elementos essenciais para fortalecer os laços sociais e a estrutura da comunidade.
            </p> 

            <p>
              Existem diversas espécies com tamanhos e características únicas, desde os pequenos saguis até primatas maiores. A curiosidade nata e a habilidade de manipular objetos fazem deles um dos grupos mais fascinantes do reino animal.
            </p> 
          </div>

          <div class="animal">
            <h2>LEÃO</h2>
            <p>
              Conhecido como o rei da selva, o leão é o único felino que vive em grupos sociais organizados, chamados de coalizões. Os machos são facilmente reconhecidos por suas jubas imponentes, que servem para proteção e exibição de força.
            </p> 
            
            <p>
              As fêmeas são as principais responsáveis pela caça, utilizando táticas de cerco coordenadas para capturar presas em savanas abertas. Elas demonstram uma cooperação impressionante para garantir o sustento de todo o grupo.
            </p> 
            
            <p>
              O rugido de um leão pode ser ouvido a quilômetros de distância, servindo como um aviso territorial para outros machos. Como predadores dominantes, eles ocupam o topo da cadeia alimentar no continente africano.
            </p> 
          </div>
        </div>
      </div>
    </section>
  `;
}

export function showTextByClick() {
  const images = document.querySelectorAll('.animals-images img');
  const texts = document.querySelectorAll('.animal');
  /* .lenght verifica se há elementos, é uma excelente prática */
  if (images.length && texts.length) {
    texts[0].classList.add('visible');
    images.forEach((image, index) => {
      image.addEventListener('click', () => {
        texts.forEach((text) => {
          text.classList.remove('visible'); /* Remove a classe visible dos textos antes de adicionar a nova */
        });
        texts[index].classList.add('visible');
      });
    });
  }
}
