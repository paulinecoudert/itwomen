import './style.scss';
import { personnalites, data } from './data';

// import $ from 'jquery';
// import axios from 'axios';

function render(arr) {
  const mainHtml = document.querySelector('main');
  let form = '';
  for (const item of arr) {
    form += '<div class="formulaire" style="display:block">';
    form += '<form method="POST" action="#">';
    form += `<h2>Question ${item.id}/8</h2>`;
    form += `<p>${item.question}</p>`;
    // iterer sur item.reponses
    form += '<input type="submit" value="Question suivante" />'; // ajouter un addeventlistener
    form += '</form>';
    form += '</div>';
  }

  // injecter dans le html
  mainHtml.innerHTML = form;
}
render(data);
