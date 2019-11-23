import senateList from './list';

const root = document.querySelector('#root');
const subject = '';
const body = '';


const render = () => {
  const listItems = senateList.map(({
    state, name, email, phoneNo,
  }) => (
    `<li>
      <p>State: ${state}</p>
      <p>Name: ${name}</p>
      <p>Email: <a href="mailto:${email}?subject=${subject}&body=${body}">Send Email</a>  </p>
      <p>Phone number: <a href="sms:${phoneNo}?body=${body}">Send Text</a></p>
    </li>`)).join('');

  const html = `<ul>${listItems}</ul>`;

  root.innerHTML = html;
};

render();
