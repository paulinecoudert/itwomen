import $ from 'jquery';


export const contact = () => {
  const contentcontact = `
    <div class="about">
      <p class="about-us">
        Ce site a été réalisé dans le cadre de l’Hackathon 2020 Code and Decode
        à Interface3. <br />
        Les six développeuses qui l’ont réalisé sont Federica Buzzi, Pauline
        Coudert, Joanna Filip, Jessica Mangbau, Gloria Spallina et Fanny
        Wastelin.
      </p>
    </div>

    <main id="contact">
      <h2>NOUS CONTACTER</h2>

      <p>
        Besoin de nous poser une question, d'avoir un renseignement concernant
        nos services ou de nous transmettre une remarque ? <br /><br />
        Laissez votre message via le formulaire de contact. <br />
        Vous serez recontacté dans la journée !
      </p>
      <button id="btn">Le formulaire</button>
    </main>

    <div class="formulaire" id="formulaire">
      <h2>Laissez-nous votre message</h2>
      <form action="#" method="post" id="form">
        <div>
          <label for="nom" class="label-form">Nom:</label>
          <input type="text" name="nom" id="nom" value="" required />
        </div>
        <div>
          <label for="prenom" class="label-form">Prénom:</label>
          <input type="text" name="prenom" id="prenom" value="" required />
        </div>
        <div>
          <label for="telephone" class="label-form">Numéro de téléphone:</label>
          <input
            type="number"
            name="telephone"
            id="telephone"
            value=""
            required
          />
        </div>
        <div>
          <label for="email" class="label-form">Email:</label>
          <input type="text" name="email" id="email" value="" required />
        </div>
        <div>
          <label for="message" class="label-form">Votre message:</label>
          <input type="text" maxlenght="500" id="message-box" required />
        </div>
        <button type="reset" class="envoyer effacer">Effacer</button>
        <!--<input type="reset" value="Effacer" class="effacer" /> -->
        <button id="btnPopup" class="btnPopup envoyer">Valider</button>
        <!-- <input type="submit" value="Envoyer" class="envoyer" /> -->
      </form>
    </div>

    <div id="overlay" class="overlay">
      <div id="popup" class="popup">
        <h2>
          Merci pour votre message !
          <span id="btnClose" class="btnClose">&times;</span>
        </h2>
        <div class="popupText">
          Nous vous répondrons dans les plus bref délais.
        </div>
      </div>
    </div>
    `;

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
      top: '150px',
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
  document.querySelector('main').innerHTML = contentcontact;
};
