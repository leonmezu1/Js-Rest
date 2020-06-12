const renderStatic = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const logo = document.createElement('div');
  const logoTitle = document.createElement('h3');
  const link = document.createElement('a');
  const linkList = document.createElement('div');
  const links = ['Menu', 'About', 'Contact'];
  const ulList = document.createElement('ul');
  const main = document.createElement('main');

  linkList.classList.add('links-list');
  ulList.classList.add('list', 'd-flex');
  main.classList.add('container', 'd-flex', 'flex-column', 'justify-content-end');
  main.setAttribute('id', 'main-container');

  links.forEach(link => {
    const tempLi = document.createElement('li');
    const tempA = document.createElement('a');
    tempLi.classList.add('list-element');
    tempA.innerText = link;
    tempA.classList.add('list-link');
    tempA.href = '#';
    tempA.setAttribute('id', link);
    tempLi.appendChild(tempA);
    ulList.appendChild(tempLi);
  });

  linkList.appendChild(ulList);


  link.href = '#';
  link.innerText = 'El tenedor';
  link.classList.add('rest-title');
  link.setAttribute('id', 'home');
  logoTitle.appendChild(link);
  logo.appendChild(logoTitle);
  logo.classList.add('logo');

  nav.classList.add('navigation', 'd-flex', 'justify-content-around', 'align-items-center', 'shadow-text');
  nav.appendChild(logo);
  nav.appendChild(linkList);
  header.appendChild(nav);
  document.body.appendChild(header);
  document.body.appendChild(main);
};

export default renderStatic;