import { senateList } from './senators.json';
import { subject, body } from './template';

const root = document.querySelector('#root');
const searchElement = document.querySelector('#search');
const selectElement = document.querySelector('#filter');

const addCountryCode = (phone, code = '+234') => phone.replace(/0/, code);

const renderListOfStateOption = () => {
  const listOfStates = senateList
    .map(({ state }) => `<option value="${state}">${state}</option>`)
    .join('');

  selectElement.innerHTML = `
  <option value="">All</option>
  ${listOfStates}`;
};

const render = list => {
  const phoneHTML = (phone, district) => `
    <p>Call: 
      <a href="tel:${addCountryCode(phone)}">${phone}</a>
    </p>
    <p>Send Text: 
      <a href="sms:${addCountryCode(phone)}
     ?body=${body(district)}">${addCountryCode(phone)}
    </a>
    </p>
    <p>Send WhatsApp: 
    <a href="https://wa.me/${addCountryCode(phone, '234')}
    ?text=${body(district)}" rel="noreferrer" target="_blank">
    ${addCountryCode(phone)}
    </a>
    </p>`;

  const emailHTML = (email, district) => `<p>Send Email: 
    <a href="mailto:${email}?subject=${subject}&body=${body(district)}">
     ${email}
    </a>
    </p>`;

  const emptyResults = `<section class="empty-section d-flex ai-c jc-c"><h3 class="empty-results">No senators found. Please try again!</h3></section>`;

  const renderContent = (data, html, dis) => (data ? html(data, dis) : '');

  const addData = ({ name, email, phone, district, fullName }) => `
   <li title="${fullName}" class="senator">
    <p class="name">${name}</p>
    <p class="district">${district} Senatorial District</p>
    <hr class="hr">
      ${renderContent(email, emailHTML, district)}
      ${renderContent(phone, phoneHTML, district)}
   </li>`;

  const listItems = list
    .map(
      ({ state, data }) => `
      <section class="grow-1 list-item">
        <h2 class="state">${state} State</h2>
        <ul>${data.map(addData).join('')}</ul>
      </section>`,
    )
    .join('');

  root.innerHTML = list.length ? listItems : emptyResults;
};

renderListOfStateOption();
render(senateList);

const handleSearch = () => {
  const searchText = searchElement.value;
  if (searchText) {
    const regExp = RegExp(searchText, 'gi');

    const filteredList = senateList.filter(
      ({ state, data }) =>
        regExp.test(state) ||
        data.some(({ fullName }) => regExp.test(fullName)),
    );

    return render(filteredList);
  }

  return render(senateList);
};

const filterByState = ({ target: { value } }) => {
  const filteredList = senateList.filter(senator => senator.state === value);
  if (filteredList.length) {
    return render(filteredList);
  }

  return render(senateList);
};

searchElement.addEventListener('keyup', handleSearch);
selectElement.addEventListener('change', filterByState);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(r => r)
      .catch(e => e);
  });
}
