import senateList from "./list";

const root = document.querySelector("#root");
const searchElement = document.querySelector("#search");

const subject = "";
const body = "";

const render = list => {
  const listItems = list
    .map(
      ({ state, name, email, phoneNo }) => `<li class="list-item">
      <p>State: ${state}</p>
      <p>Name: ${name}</p>
      <p>Send Email: <a href="mailto:${email}?subject=${subject}&body=${body}">${email}</a> </p>
      <p>Send Text: ${
        phoneNo
          ? `<a href="sms:${phoneNo}?body=${body}">${phoneNo}</a>`
          : "No Phone number"
      }</p>
    </li>`
    )
    .join("");

  const html = `<ul>${listItems}</ul>`;
  root.innerHTML = html;
};

render(senateList);

const handleSearch = () => {
  const searchText = searchElement.value;
  const regExp = RegExp(searchText, "gi");

  const filteredList = senateList.filter(
    senator => regExp.test(senator.name) || regExp.test(senator.state)
  );

  render(filteredList);
};

searchElement.addEventListener("keyup", handleSearch);
