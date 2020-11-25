import './style.scss';
import { personnalites, data } from './data';

// import $ from 'jquery';
// import axios from 'axios';

function render(arr) {
  const mainHtml = document.querySelector('main');
  let form = '';
  for (const item of arr) {
    form += '<div class="formulaire" style="display:none">';
    form += '<form method="POST" action="#">';
    form += `<h2>Question ${item.id}/8</h2>`;
    form += `<p>${item.question}</p>`;
    // iterer sur item.reponses
    for (const rep of item.reponses) {
      form += `<input type ="radio" name="reponse"> ${rep.r}<br>`;
    }

    form += '<input type="submit" value="Question suivante" />'; // ajouter un addeventlistener
    form += '</form>';
    form += '</div>';
  }
  // injecter dans le html
  mainHtml.innerHTML = form;
}
render(data);

// cela n'affiche que le premier
const forms = document.querySelectorAll('.formulaire');
forms[0].style.display = 'block';
