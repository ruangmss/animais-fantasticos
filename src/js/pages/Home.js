import { Header } from "../components/Header/Header.js";
import { Footer } from "../components/Footer/Footer.js";
import { Animals, showTextByClick } from "../components/Animals/Animals.js";
import {
  FrequentlyAskedQuestions,
  showAnswers,
} from "../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions.js";

export function Home() {
  let header = document.getElementById("header");
  let footer = document.getElementById("footer");
  let app = document.getElementById("app");

  if (header && footer && app) {
    header.innerHTML = Header();
    footer.innerHTML = Footer();
    app.innerHTML = Animals() + FrequentlyAskedQuestions();
    showTextByClick();
    showAnswers();
  }
}
