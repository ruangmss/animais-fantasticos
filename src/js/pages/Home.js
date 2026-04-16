import { Header } from '../components/Header/Header.js';
import { Footer } from '../components/Footer/Footer.js';

export function Home() {
  let header = document.getElementById('header');
  let footer = document.getElementById('footer');
  let app = document.getElementById('app');

  if (header && footer) {
    header.innerHTML = Header();
    footer.innerHTML = Footer();
  }
}
