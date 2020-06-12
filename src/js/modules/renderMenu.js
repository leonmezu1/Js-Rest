import menu1 from '../../assets/images/menu/menu1.jpg';
import menu2 from '../../assets/images/menu/menu2.jpg';
import menu3 from '../../assets/images/menu/menu3.jpg';
import menu4 from '../../assets/images/menu/menu4.jpg';
import menu5 from '../../assets/images/menu/menu5.jpg';
import menu6 from '../../assets/images/menu/menu6.jpg';
import menu7 from '../../assets/images/menu/menu7.jpg';
import menu8 from '../../assets/images/menu/menu8.jpg';
import menu9 from '../../assets/images/menu/menu9.jpg';
import clear from './clear';

const menuArray = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9];
const menuInfo = [
  {
    title: 'Churrasco a la parrilla',
    description: 'Marinated skirt steak, coal cooked, juicy selected beef.',
    price: '$ 27.95',
  },
  {
    title: 'Tierra Mar y Aire',
    description: 'Land, Sea and Air, rice traditional mixing.',
    price: '$ 17.95',
  },
  {
    title: 'New York Steak a la Lena',
    description: 'Firewood Roasted New York Steak, colombian styled cooking',
    price: '$ 19.95',
  },
  {
    title: 'Cazuela Paisa',
    description: 'Typical Colombian Dish in Casserole.',
    price: '$ 15.95',
  },
  {
    title: 'Cazuela de Marisco',
    description: 'Seafood Casserole.',
    price: '$ 18.95',
  },
  {
    title: 'Pargo Rojo Marinado',
    description: 'Marinated Red Snapper.',
    price: '$ 20.95',
  },
  {
    title: 'Pargo Rojo Frito',
    description: 'Fried whole Red Snapper.',
    price: '$ 16.95',
  },
  {
    title: 'Porcha de Cerdo a la Lena',
    description: 'Firewood Roasted Ham Steak.',
    price: '$ 15.95',
  },
  {
    title: 'Punta de Anca Mariposa',
    description: 'Trip Tip Butterfly Style.',
    price: '$ 19.95',
  },
];

const renderMenu = () => {
  const main = clear();
  const specialities = document.createElement('div');
  const menuRestTitle = document.createElement('h2');
  const menuContainer = document.createElement('div');

  specialities.classList.add('specialities');
  menuRestTitle.classList.add('rest-title', 'shadow-text');
  menuRestTitle.innerText = 'House specialities';
  menuContainer.classList.add('menu-container');

  menuInfo.forEach((dish, index) => {
    const menuItem = document.createElement('div');
    const img = document.createElement('img');
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardDescription = document.createElement('p');
    const cardPrice = document.createElement('p');
    menuItem.classList.add('menu-item');
    card.classList.add('card');
    cardBody.classList.add('card-body', 'text-center');
    cardTitle.classList.add('card-title');
    cardDescription.classList.add('card-text', 'p-2');
    cardPrice.classList.add('card-text', 'font-weight-bold');
    img.classList.add('card-img-top', 'img-fluid');
    img.setAttribute('loading', 'lazy');

    img.setAttribute('alt', dish.title);
    img.src = menuArray[index];

    cardTitle.innerText = dish.title;
    cardDescription.innerText = dish.description;
    cardPrice.innerText = dish.price;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardPrice);

    card.appendChild(img);
    card.appendChild(cardBody);

    menuItem.appendChild(card);
    menuContainer.appendChild(menuItem);
  });

  specialities.appendChild(menuRestTitle);
  specialities.appendChild(menuContainer);
  main.appendChild(specialities);
  main.style.height = 'auto';
  document.getElementById('main-wrapper').classList.add('blur');
};

export default renderMenu;
