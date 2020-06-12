import clear from './clear';
import renderMenu from './renderMenu';

const renderBanner = () => {
  const main = clear();
  const banner = document.createElement('div');
  const title = document.createElement('h1');
  const menuBtn = document.createElement('div');

  banner.classList.add('banner', 'd-flex', 'align-items-center', 'justify-content-around');
  title.classList.add('slogan', 'shadow-text-slim', 'text-left');
  menuBtn.classList.add('btn', 'btn-lg', 'px-3', 'py-2', 'shadow-text-slim', 'shadow-lg');

  title.innerText = 'Colombian food made with love!';
  menuBtn.innerText = 'See our menu';

  menuBtn.setAttribute('id', 'menu-btn');
  menuBtn.addEventListener('click', renderMenu);

  banner.appendChild(title);
  banner.appendChild(menuBtn);
  main.appendChild(banner);

  main.style.height = '55vh';
  document.getElementById('main-wrapper').classList.remove('blur');
};

export default renderBanner;