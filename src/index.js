import senateList from './list';

const root = document.querySelector('#root');
const subject = '';
const body = '';

const render = () => {
  const checkPhone = (p) => (p ? `<a href="sms:${p}?body=${body}">Send Text: ${p}</a>` : 'No Phone number');
  const listItems = senateList
    .map(
      ({
        state, name, email, phoneNo,
      }) => `<li>
      <p>State: ${state}</p>
      <p>Name: ${name}</p>
      <p>Email: <a href="mailto:${email}?subject=${subject}&body=${body}">Send Email: ${email}</a> </p>
      <p>Phone number: ${checkPhone(phoneNo)}</p>
    </li>`,
    )
    .join('');

  const html = `<ul>${listItems}</ul>`;

  root.innerHTML = html;
};

render();
