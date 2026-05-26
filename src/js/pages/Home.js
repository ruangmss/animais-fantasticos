import { Header, initDropDownMenu, initMobileMenu } from '../components/Header/Header.js';
import { Footer } from '../components/Footer/Footer.js';
import { Animals, initTabMenu } from '../components/Animals/Animals.js';
import {
  FrequentlyAskedQuestions,
  initAccordionList,
} from '../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions.js';
import { About } from '../components/About/About.js';
import { Contact, initBusinessHours } from '../components/Contact/Contact.js';
import { initSmoothReveal } from '../modules/smoothReveal.js';
import { Modal, initModal } from '../components/Modal/Modal.js';
import { Numbers, initFetchAnimals } from '../components/Numbers/Numbers.js';

export function Home() {
  let header = document.getElementById('header');
  let footer = document.getElementById('footer');
  let app = document.getElementById('app');

  if (header && footer && app) {
    header.innerHTML = Header();
    footer.innerHTML = Footer();
    app.innerHTML = Animals() + About() + FrequentlyAskedQuestions() + Numbers() + Contact() + Modal();
    initTabMenu();
    initDropDownMenu();
    initMobileMenu();
    initAccordionList();
    initSmoothReveal();
    initModal();
    initFetchAnimals();
    initBusinessHours();
  }
}
