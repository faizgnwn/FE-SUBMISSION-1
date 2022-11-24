import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'
import data from '../DATA.json';

console.log('Hello Coders! :)');


let html = "";
  data.restaurants.forEach((resto) => {
    html += `
        <article class="post-item">
        <div class="post-item_city">${resto.city}</div>
          <div>
            <img class="post-item_thumbnail" src="${resto.pictureId}" alt="Gambar suasana restoran yang berada di ${resto.city}"/>
            </div>
          <div class="post-item_content">
            <p class="post-item_rating">
              Rating <span class="post-item_rate_number">${resto.rating}</span>
            </p>
            <h1 class="post-item_title"><a href="#">${resto.name}</a></h1>
            <p class="post-item_description">${resto.description}</p>
          </div>
        </article>
    `;
    document.querySelector(".posts").innerHTML = html;
  });

  const menu = document.querySelector('#menu');
  const hero = document.querySelector('.hero');
  const main = document.querySelector('main');
  const drawer = document.querySelector('#drawer');

  menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
  });

  hero.addEventListener('click', function () {
    drawer.classList.remove('open')
  });

  main.addEventListener('click', function () {
    drawer.classList.remove('open')
  });