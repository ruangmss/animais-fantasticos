import { Header, initDropDownMenu } from "../components/Header/Header.js";
import { Footer } from "../components/Footer/Footer.js";
import { Animals, initTabMenu } from "../components/Animals/Animals.js";
import {
  FrequentlyAskedQuestions,
  initAccordionList,
} from "../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions.js";
import { About } from "../components/About/About.js";
import { Contact } from "../components/Contact/Contact.js";
import { initSmoothReveal } from "../modules/smoothReveal.js";
import { Modal, initModal } from "../components/Modal/Modal.js";

export function Home() {
  let header = document.getElementById("header");
  let footer = document.getElementById("footer");
  let app = document.getElementById("app");

  if (header && footer && app) {
    header.innerHTML = Header();
    footer.innerHTML = Footer();
    app.innerHTML =
      Animals() + About() + FrequentlyAskedQuestions() + Contact() + Modal();
    initTabMenu();
    initDropDownMenu();
    initAccordionList();
    initSmoothReveal();
    initModal();
  }
}
