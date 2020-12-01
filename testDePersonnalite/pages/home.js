import $ from 'jquery';
import { contact } from './contact';
import { ligne } from './ligne';
import { ressources } from './ressources';
import { test } from './test';

export const home = () => {
  const content = `
    <section>
    <div class="acceuil">
      <div>
        <article>
          <h2 class="logo">{logiciELLES}</h2>
          <p>
          Vous êtes une femme ?</p><p>
          La programmation vous intéresse ou vous vous demandez à quoi ça sert ?</p><p>
          Combien d'informaticiennes connaissez-vous ? Aucune !?!
          Alors découvrez les informaticiennes les plus brillantes qui ont façonné l’histoire du numérique à travers un test !
          Vous pourriez même vous rendre compte que vous ressemblez beaucoup à l’une d’entre elles
          </p>
          <button class="go_test majuscule">passer le test de personalité</button>
        </article>
      </div>
    </div>
  </section>
    `;
  document.querySelector('main').innerHTML = content;
  document.querySelector('footer').innerHTML = '';
  $('.go_test').on('click', () => test());
  document.querySelector('.go_ligne').addEventListener('click', () => ligne());
  document.querySelector('.go_contact').addEventListener('click', () => contact());
  document.querySelector('.go_ressources').addEventListener('click', () => ressources());
};
