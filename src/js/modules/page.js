import renderStatic from './renderStatic';
import renderBanner from './renderBanner';
import renderContact from './renderContact';
import renderMenu from './renderMenu';

const page = () => {
  const mainWrapper = document.createElement('div');

  mainWrapper.setAttribute('id', 'main-wrapper');
  document.body.appendChild(mainWrapper);

  renderStatic();
  renderBanner();

  const homeLink = document.getElementById('home');
  const menuLink = document.getElementById('Menu');
  const contactLink = document.getElementById('About');
  const aboutLink = document.getElementById('Contact');

  menuLink.addEventListener('click', renderMenu);
  contactLink.addEventListener('click', renderContact);
  aboutLink.addEventListener('click', renderContact);
  homeLink.addEventListener('click', renderBanner);
};

export default page;