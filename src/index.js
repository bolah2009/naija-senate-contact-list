import senateList from "./list";
import { subject, body } from "./template";

const root = document.querySelector("#root");
const searchElement = document.querySelector("#search");
const selectElement = document.querySelector("#filter");

const addCountryCode = (phone, code = "+234") => phone.replace(/0/, code);

const renderListOfStateOption = () => {
  const states = [];
  const listOfStates = senateList
    .map(({ state }) => {
      if (states.includes(state)) {
        return "";
      }
      states.push(state);
      return `<option value="${state}">${state}</option>`;
    })
    .join("");

  selectElement.innerHTML = `
  <option value="">All</option>
  ${listOfStates}`;
};
const render = list => {
  const listItems = list
    .map(
      ({ state, name, email, phoneNo }) => `<li class="list-item">
      <p>State: ${state}</p>
      <p>Name: ${name}</p>
      <p>Send Email: <a href="mailto:${email}?subject=${subject}&body=${body}">${email}</a> </p>
      <p>Send Text: ${
        phoneNo
          ? `<a href="sms:${addCountryCode(
              phoneNo
            )}?body=${body}">${addCountryCode(phoneNo)}</a>`
          : "No Phone number"
      }</p>
    </li>`
    )
    .join("");

  const html = `<ul>${listItems}</ul>`;
  root.innerHTML = html;
};

renderListOfStateOption();
render(senateList);

const handleSearch = () => {
  const searchText = searchElement.value;
  const regExp = RegExp(searchText, "gi");

  const filteredList = senateList.filter(
    senator => regExp.test(senator.name) || regExp.test(senator.state)
  );

  render(filteredList);
};

const filterByState = ({ target: { value } }) => {
  const filteredList = senateList.filter(senator => senator.state === value);
  if (filteredList.length) {
    return render(filteredList);
  }

  render(senateList);
};

searchElement.addEventListener("keyup", handleSearch);
selectElement.addEventListener("change", filterByState);
