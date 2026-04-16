import { Header } from '../components/Header/Header.js';

export function Home() {
  let header = document.getElementById('header');
  let footer = document.getElementById('footer');
  let app = document.getElementById('app');

  if (header) {
    header.innerHTML = Header();
  }
}
