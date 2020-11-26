import './style.scss';
import $ from 'jquery';
// import axios from 'axios';

const formulaire = document.getElementById('formulaire');
const btn = document.getElementById('btn');
const contact = $('#contact');

// faire déplacer ma div avec le message de contact
btn.addEventListener('click', (e) => {
  console.log('toto');
  e.preventDefault();
  contact.css({
    position: 'absolute',
    top: '30px',
    left: '50px',
  });

  // faire apparaitre le formulaire de contact
  if (formulaire.style.display !== 'block') {
    formulaire.style.display = 'block';
  } else {
    formulaire.style.display = 'none';
  }
});

// j'appelle tous mes inputs
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const telephone = document.getElementById('telephone');
const email = document.getElementById('email');
const msg = document.getElementById('message-box');
const btnPopup = document.getElementById('btnPopup');

// faire en sorte que le bouton valider soit disabled tant que tous les inputs ne sont pas remplis

btnPopup.disabled = true;

nom.addEventListener('input', () => {
  if (nom.value) {
    btnPopup.disabled = false;
  } else {
    btnPopup.disabled = true;
  }
});

// faire apparaître ma pop-up

const overlay = document.getElementById('overlay');
btnPopup.addEventListener('click', openMoadl);
function openMoadl(e) {
  e.preventDefault();
  if (document.querySelector('form').checkValidity()) {
    overlay.style.display = 'block';
  }
}
// faire disparaitre ma pop-up
const btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click', closeModal);
function closeModal() {
  overlay.style.display = 'none';
  formulaire.style.display = 'none';
}
