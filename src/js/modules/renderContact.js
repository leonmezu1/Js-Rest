import clear from './clear';

const renderContact = () => {
  const main = clear();
  const contact = document.createElement('div');
  const contactContainer = document.createElement('div');
  const leftContact = document.createElement('div');
  const rightContact = document.createElement('div');
  const rightHeadline = document.createElement('h2');
  const form = document.createElement('form');
  const button = document.createElement('button');
  const headlines = ['Opening Hours', 'Reservations', 'Adress'];
  const paragraphs = ['Monday ~ Saturday: 8:00 am ~ 11:00 pm', '(012)-345-6789', '123 Restaurant Ave, Flavor Town, Traditional 80085, Awesome Country'];
  const labels = ['name', 'email', 'message'];

  contact.classList.add('contact');
  contactContainer.classList.add('contact-container', 'd-flex', 'justify-content-between');
  leftContact.classList.add('rounded-lg', 'bg-white');
  rightContact.classList.add('rounded-lg', 'bg-white');
  rightHeadline.innerText = 'Contact us';


  headlines.forEach((headline, index) => {
    const tempHeadline = document.createElement('h2');
    const tempParagraph = document.createElement('p');
    tempHeadline.innerText = headline;
    tempParagraph.classList.add('contact-text');
    tempParagraph.innerText = paragraphs[index];

    leftContact.appendChild(tempHeadline);
    leftContact.appendChild(tempParagraph);
  });

  labels.forEach((label, index) => {
    const tempGroup = document.createElement('div');
    const tempLabel = document.createElement('label');

    tempGroup.classList.add('form-group');

    tempLabel.htmlFor = label;
    tempLabel.innerText = label.charAt(0).toUpperCase() + label.slice(1);
    tempGroup.appendChild(tempLabel);

    if (index < 2) {
      const tempInput = document.createElement('input');
      tempInput.classList.add('form-control');
      tempInput.setAttribute('type', label === 'email' ? 'email' : 'text');
      tempInput.setAttribute('placeholder', `Your ${label}`);
      tempGroup.appendChild(tempInput);
    } else {
      const textArea = document.createElement('textarea');
      textArea.setAttribute('name', 'Message');
      textArea.setAttribute('cols', '30');
      textArea.setAttribute('rows', '4');
      textArea.setAttribute('placeholder', 'Your message');
      textArea.classList.add('form-control');
      tempGroup.appendChild(textArea);
    }

    form.appendChild(tempGroup);
  });


  button.classList.add('btn', 'btn-primary');
  button.setAttribute('type', 'submit');
  button.innerText = 'Send';

  form.appendChild(button);
  rightContact.appendChild(rightHeadline);
  rightContact.appendChild(form);
  contactContainer.appendChild(leftContact);
  contactContainer.appendChild(rightContact);
  contact.appendChild(contactContainer);
  main.appendChild(contact);
  main.style.height = 'auto';
  document.getElementById('main-wrapper').classList.add('blur');
};

export default renderContact;