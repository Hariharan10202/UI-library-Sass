const getElement = document.querySelector(".multiSelect-list");

const newfunction = () => {
  const len = 5;

  let str = ``;

  for (let index = 0; index < len; index++) {
    str = `
    <li>
    <div>
      <input type="checkbox" />
      <span>Option ${index + 1}</span>
    </div>
  </li>
`;
    getElement.insertAdjacentHTML("beforeend", str);
  }
};
newfunction();
