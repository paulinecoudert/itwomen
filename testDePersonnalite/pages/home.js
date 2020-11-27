import { contact } from './contact';
import { ligne } from './ligne';
import { test } from './test';

export const home = () => {
  const content = `
    <section>
    <div class="acceuil">
      <div>
        <article>
          <h2>Présentation</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            architecto aliquam nisi, ullam aperiam autem omnis dignissimos
            hic obcaecati ea consectetur distinctio, dolor voluptatibus!
            Obcaecati dolore dolor fugit laboriosam laudantium?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            architecto aliquam nisi, ullam aperiam autem omnis dignissimos
            hic obcaecati ea consectetur distinctio, dolor voluptatibus!
            Obcaecati dolore dolor fugit laboriosam laudantium?
          </p>
          <button class="go_test majuscule">passer le test de personalité</button>
        </article>
      </div>
    </div>
  </section>
  <footer></footer>
    `;
  document.querySelector('main').innerHTML = content;
  document.querySelector('.go_test').addEventListener('click', () => test());
  document.querySelector('.go_ligne').addEventListener('click', () => ligne());
  document.querySelector('.go_contact').addEventListener('click', () => contact());
};
