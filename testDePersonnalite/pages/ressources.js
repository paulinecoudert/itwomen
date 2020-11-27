export const ressources = () => {
  const contentressource = `
  <div class="ressources">
    <div class="title">
<h1>Pour aller plus loin</h1>
      <h3>
        Quelques ressources pour en savoir plus sur les femmes dans l’informatique
  </h3>
</div>
<div class="container1">

<div class="card-group">
  <div class="card">
    <img class="card-img-top" src="oublies_numerique.jpg" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Les oubliés du numérique</h5>
      <p class="card-text">
      <a
            href="https://www.le-passeur-editeur.com/les-livres/essais/les-oubli%C3%A9es-du-num%C3%A9rique/"
            >Les oubliées du numérique d'Isabelle Collet (2019)</a
          >, un livre qui explore pourquoi le numérique est massivement dominé
          par les hommes et quelles sont les solutions à mettre en place pour
          l'inclusion des femmes
      </p>
    </div>
   
  </div>
  <div class="card">
    <img class="card-img-top" src="podcast.jpg" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Des ordis, des souris et des hommes</h5>
      <p class="card-text">
      <a
            href="https://www.binge.audio/podcast/les-couilles-sur-la-table/des-ordis-des-souris-et-des-hommes"
            >Le podcast ‘Des ordis, des souris et des hommes’</a
          >
          se plonge sur le pourquoi les personnes qui aujourd’hui inventent,
          codent, programment les logiciels, les algorithmes, les applications
          que nous utilisons tous les jours sont-elles en très grande majorité
          des hommes?
      </p>
    </div>

  </div>
  <div class="card">
    <img class="card-img-top" src="womencode.jpg" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Women code</h5>
      <p class="card-text">
      <a href="https://www.womendotcode.be/">Women.code(be)</a> c’est la
          communauté de femmes qui codent en Belgique! Elles organizent des
          evenements et gérent une newsletter
      </p>
    </div>
   
  </div>
</div>
</div>
<div class="container2">

<div class="card-group">
  <div class="card">
    <img class="card-img-top" src="trounoir.jpg" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Le trou noir</h5>
      <p class="card-text">
      L’image du trou noir vous a bouleversé? Lisez
      <a
        href="https://www.sciencesetavenir.fr/espace/katie-bouman-la-scientifique-derriere-l-image-du-trou-noir_132923 "
        >l’article</a
      >
      sur le scientifique Katie Bouman qui a mis au point l'algorithme
      capable d'assembler toutes les images des télescopes utilisés pour
      mettre au point l'image du trou noir !
      </p>
    </div>
   
  </div>
  <div class="card">
    <img class="card-img-top" src="the_computers.jpg" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">The computers</h5>
      <p class="card-text">
      <a href="https://vimeo.com/ondemand/eniac6 ">The Computers</a> c’est
      un documentaire qui raconte l'histoire remarquable des six jeunes
      femmes qui ont programmé le premier ordinateur programmable
      entièrement électronique au monde, ENIAC, dans le cadre d'un projet
      secret américain de la Seconde Guerre mondiale
    </p>
      </p>
    </div>

  </div>
  <div class="card">
    <img class="card-img-top" src="femmes_informatique.png" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">7 femmes qui ont faconné l'histoire numérique</h5>
      <p class="card-text">
      <a
            href="https://www.01net.com/actualites/sept-femmes-qui-ont-faconne-l-histoire-numerique-1648282.html "
            >Sept femmes qui ont façonné l'Histoire numérique</a
          >, l'article dont sont tirés les profils de test de personnalité
        </p>
      </p>
    </div>
   
  </div>
</div>
</div>
</div>
    `;
  document.querySelector('main').innerHTML = contentressource;
  document.querySelector('footer').innerHTML = ' ';
};
