import './style.scss';
import $ from 'jquery';
import { bds } from '../testDePersonnalite/dataligne.js';
// import axios from 'axios';

// ${livre.resume.substr(0, 31)}

/* function afficheleTexte(textes) {
    var contenu = ' ';

    for (var texte of textes) {
        contenu += `<div class='box-${texte.id[0]}> ${texte.titre} <br>
        ${texte.expand}</div>`;
      }
      return contenu;
    }

    var data = afficheleTexte(bds);

    var app = document.getElementById('boxun');
    app.innerHTML = data;
    */
function render(textes) {
  const mainHtml = document.querySelector('main');
  let form = '';
  for (const texte of textes) {
    form += `<div id="test-${texte.id}" class="textebd" >`;
    form += `<h4>${texte.titre}</h4>`;
    form += '<button id="btn">En savoir plus</button>';
    form += `<p class="para" style="display:none">${texte.expand}</p>`;
    form += '</div>';
  }
  mainHtml.innerHTML = form;
}
render(bds);
const paras = document.querySelectorAll('.para');
const btns = document.querySelectorAll('#btn');
const text = $('#test-0');
const text1 = $('#test-1');
const text2 = $('#test-2');
const text3 = $('#test-3');
const text4 = $('#test-4');
const text5 = $('#test-5');

btns[0].addEventListener('click', () => {
  if (paras[0].style.display === 'none') {
    paras[0].style.display = 'block';
   
  } else {
    paras[0].style.display = 'none';
  }
});

btns[1].addEventListener('click', () => {
  if (paras[1].style.display === 'none') {
    paras[1].style.display = 'block';
  
  } else {
    paras[1].style.display = 'none';
  }
});

btns[2].addEventListener('click', () => {
  if (paras[2].style.display === 'none') {
    paras[2].style.display = 'block';
  
  } else {
    paras[2].style.display = 'none';
  }
});

btns[3].addEventListener('click', () => {
  if (paras[3].style.display === 'none') {
    paras[3].style.display = 'block';
   
  } else {
    paras[3].style.display = 'none';
  }
});

btns[4].addEventListener('click', () => {
  if (paras[4].style.display === 'none') {
    paras[4].style.display = 'block';
    
  } else {
    paras[4].style.display = 'none';
  }
});

btns[5].addEventListener('click', () => {
  if (paras[5].style.display === 'none') {
    paras[5].style.display = 'block';
    
  } else {
    paras[5].style.display = 'none';
  }
});
