export function Contact() {
  return `
    <section class="contact container scroll" id="contact">
      <div class="contact-title">
        <h2>Contato</h2>
      </div>

      <div class="contact-content">
        <div class="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113854.22721293931!2d-48.7763854063353!3d-26.905253250572432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cc949bf3cf61%3A0xef02eadd26842207!2sItaja%C3%AD%20-%20Volta%20de%20Cima%2C%20Itaja%C3%AD%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1776742146427!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de Itajaí, município localizado em Santa Catarina"></iframe>
        </div> 

        <div class="contact-data">
          <ul>
            <li><a href=mailto:ruan.gmss@outlook.com>ruan.gmss@outlook.com</a></li>
            <li><a href=tel:99999999999>(99) 99999-9999</a></li>
            <li><a href="https://maps.app.goo.gl/fkhqaT9xKc6WnQcTA" target="_blank" rel="noopener noreferrer">Itajaí - SC</a></li>
            <li><a href="https://maps.app.goo.gl/djBvssAAvGZA6EUY7" target="_blank" rel="noopener noreferrer">Rua Fictícia, 123</a></li>
            <li id="operation">De segunda a sexta, das 08:00 às 18:00 <span id="business-hours-status"></span></li>
          </ul>
        </div> 
      </div>
    </section>
  `;
}

export function initBusinessHours() {
  const businessDays = [1, 2, 3, 4, 5];
  const businessHours = [8, 18];
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const operation = document.querySelector('#operation');
  const matchDay = businessDays.indexOf(currentDay) >= 0 ? true : false;
  const matchHour = currentHour >= businessHours[0] && currentHour <= businessHours[1];
  const contactData = document.querySelector('.contact-data');
  const operationStatus = document.getElementById('business-hours-status');
  let isOpened = true;

  if (operation && contactData && operationStatus) {
    if (matchDay && matchHour) {
      operation.classList.remove('closed');
      operation.classList.add('opened');
      isOpened = true;
    } else {
      operation.classList.remove('opened');
      operation.classList.add('closed');
      isOpened = false;
    }

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');

    contactData.appendChild(tooltip);

    function showTooltip(event) {
      tooltip.classList.add('visible');

      if (isOpened) {
        tooltip.textContent = 'Estamos abertos!';
      } else {
        tooltip.textContent = 'Estamos fechados.';
      }

      tooltip.style.left = `${event.clientX}px`;
      tooltip.style.top = `${event.clientY - 35}px`;
    }

    function closeTooltip() {
      tooltip.classList.remove('visible');
    }

    operationStatus.addEventListener('mousemove', showTooltip);
    operationStatus.addEventListener('mouseleave', closeTooltip);
  }
}
