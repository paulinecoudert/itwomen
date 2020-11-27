import { personnalites, data } from '../data';
import { lamarrFooter, lamarrPro } from '../lamarr';
import { hamiltonFooter, hamiltonDescription } from '../hamilton';
import { williamsDescription, williamsFooter } from '../williams';
import { clarkeDescription, clarkeFoorter } from '../clarke';
import { home } from './home';
import { ligne } from './ligne';

export const test = () => {
  // import axios from 'axios';
  console.log('toto');

  function render(arr) {
    const mainHtml = document.querySelector('main');
    let form = '';
    for (const item of arr) {
      form += `<div id=${item.id} class="formulaire test-form" style="display:none" >`;
      // form += '<form method="POST" action="">';
      form += `<h2 class="marg">Question ${item.id}/7</h2>`;
      form += '<div class="parQst">';
      form += `<p>${item.question}</p>`;
      form += '</div>';
      // iterer sur item.reponses
      for (let i = 0; i < item.reponses.length; i++) {
        const rep = item.reponses[i];
        if (i === 0) {
          form += `<input class="radio marg" type="radio" name="reponse${item.id}" value="${rep.p}" checked> ${rep.r}<br>`;
        } else {
          form += `<input class="radio marg" type="radio" name="reponse${item.id}" value="${rep.p}"> ${rep.r}<br>`;
        }
      }

      if (item.id === 7) {
        form += '<input type="submit" id="bouton" value="Voir mes résultats" class="boutonFinish" style="display:block"/>'; // ajouter class boutonResult a la place de id
      } else {
        form += `<input type="submit" id="bouton" value="Question suivante" class="boutonSuivant${item.id}" style="display:block" />`; // ajouter un addeventlistener
      }
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
    if (e.target.matches('#bouton')) { // Si c'est le bouton "question suivante"
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

      // trier le tableau --> celui qui a le plus de point en 1ere position et max = le tableau
      const max = resultat.sort((a, b) => b.point - a.point);

      console.log(max);

      // Si le bouton surlequel  on clique est le dernier bouton "finish"
      if (e.target.matches('.boutonFinish')) {
      /// aller chercher le nom de la 1er ligne du tableau généré
        const nomGagnant = max[0].name;
        if (nomGagnant === 'Hedy Lamarr') {
          document.querySelector('main').innerHTML = lamarrPro;
          document.querySelector('footer').innerHTML = lamarrFooter;
        } else if (nomGagnant === 'Joan Clarke') {
          document.querySelector('main').innerHTML = clarkeDescription;
          document.querySelector('footer').innerHTML = clarkeFoorter;
        } else if (nomGagnant === 'Margaret Hamilton') {
          document.querySelector('main').innerHTML = hamiltonDescription;
          document.querySelector('footer').innerHTML = hamiltonFooter;
        } else {
          document.querySelector('main').innerHTML = williamsDescription;
          document.querySelector('footer').innerHTML = williamsFooter;
        }
      }
    }
  });
  document.querySelector('.go_home').addEventListener('click', () => home());
  document.querySelector('.go_ligne').addEventListener('click', () => ligne());
};
