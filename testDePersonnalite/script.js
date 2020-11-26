import './style.scss';
import $ from 'jquery';
import { personnalites, data } from './data';
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
    for (let i = 0; i < item.reponses.length; i++) {
      const rep = item.reponses[i];
      if (i === 0) {
        form += `<input class="radio" type="radio" name="reponse${item.id}" value="${rep.p}" checked> ${rep.r}<br>`;
      } else {
        form += `<input class="radio" type="radio" name="reponse${item.id}" value="${rep.p}"> ${rep.r}<br>`;
      }
    }
    form += '<input type="submit" id="bouton" value="Question suivante" />'; // ajouter un addeventlistener
    form += '<input type="submit" id="rslt" value="Voir mes résultats" style="display:none"/>';
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

/// récupérer les réponses, les metttres dans un tableau de point puis les trier.

const resultat = [
  { name: 'Hedy Lamarr', point: 0 },
  { name: 'Joan Clarke', point: 0 },
  { name: 'Margaret Hamilton', point: 0 },
  { name: 'Roberta William', point: 0 },

];
// utiliser la délégation d'event. si c'est qqch qui a l'id bouton tu fais un truc...
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#bouton')) {
    // Aller chercher tous les boutons radio
    const radios = e.target.parentNode.querySelectorAll('.radio'); // On peut surement aller le chercher par le type
    console.log(radios); // 4 boutons
    // POur chaque élément vérifier s'il est checked
    // S'il est checked, aller chercher sa value.
    // Quand on a sa value, boucler sur le tableau résultat et si la value === le name ==> +=1
    let chooseValue;
    for (const btnRadio of radios) {
      if (btnRadio.checked === true) {
        console.log('ça marche!!!');
        chooseValue = btnRadio.value;
      }
    }
    console.log(chooseValue);

    // boucler sur le tableau résultat et voir si la valeur du bouton checked = les noms du tableau
    for (const el of resultat) {
      if (el.name === chooseValue) {
        el.point += 1;
      }
    }

    // trier le tableau --> celui qui a le plus de point en 1ere position.
    const max = resultat.sort((a, b) => b.point - a.point);

    console.log(max);

    // Quand on clique sur le dernier bouton "finish" de la question
    // Boucler sur le tableau resultat.
    // aller chercher le 1er
    // Voir si  el.name == Clarck {
    // Alors afficher la div = descriptionCLarck
    // }
  }
});
