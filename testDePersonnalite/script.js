import './style.scss';
import { personnalites, data } from './data';
import $ from 'jquery';
// import axios from 'axios';

function render(arr) {
  const mainHtml = document.querySelector('main');
  let form = '';
  for (const item of arr) {
    form += `<div id=${item.id} class="formulaire test-form" style="display:none" >`;
    // form += '<form method="POST" action="">';
    form += `<h2>Question ${item.id}/7</h2>`;
    form += `<p>${item.question}</p>`;
    // iterer sur item.reponses
    for (const rep of item.reponses) {
      form += `<input type ="radio" name="reponse"> ${rep.r}<br>`;
    }
    form += '<input type="submit" id="bouton" value="Question suivante" />'; // ajouter un addeventlistener
    form += `<input type="submit" id="rslt" value="Voir mes résultats" style="display:none"/>`;
    // form += '</form>';
    form += '</div>';
  }
  // injecter dans le html
  mainHtml.innerHTML = form;
}
render(data);

// cela n'affiche que le premier
const forms = document.querySelectorAll('.formulaire');

forms[0].style.display = 'block';

// cela n'affiche que le premier
const btns = document.querySelectorAll('#bouton');

btns[0].addEventListener('click', () => {
  forms[0].style.display = 'none';
  forms[1].style.display = 'block';
});

btns[1].addEventListener('click', () => {
  forms[1].style.display = 'none';
  forms[2].style.display = 'block';
});

btns[2].addEventListener('click', () => {
  forms[2].style.display = 'none';
  forms[3].style.display = 'block';
});

btns[3].addEventListener('click', () => {
  forms[3].style.display = 'none';
  forms[4].style.display = 'block';
});
btns[4].addEventListener('click', () => {
  forms[4].style.display = 'none';
  forms[5].style.display = 'block';
});
btns[5].addEventListener('click', () => {
  forms[5].style.display = 'none';
  forms[6].style.display = 'block';
});
btns[6].addEventListener('click', () => {
  forms[6].style.display = 'none';
  forms[7].style.display = 'block';
});