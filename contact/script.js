import './style.scss';
// import $ from 'jquery';
// import axios from 'axios';

const formulaire = document.getElementById('formulaire');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (formulaire.style.display != 'block') {
    formulaire.style.display = 'block';
  } else {
    formulaire.style.display = 'none';
  }
});
