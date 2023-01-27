SelectProperty = {
  selectLists: document.querySelector(".select-lists"),
  inputField: document.querySelector(".inp-l"),
  mainInput: document.querySelector(".mainInput"),
  closeDropdownhandler: () => {
    document.addEventListener("click", function (event) {
      console.log("in");
      const target = event.target;

      const targetElement = "." + String(SelectProperty.mainInput.classList[0]);

      if (!target.closest(targetElement)) {
        SelectProperty.selectLists.classList.remove("showDropdown");
      }
    });
  },
};

const selectHandler = (e) => {
  for (
    let index = 0;
    index < SelectProperty.selectLists.children.length;
    index++
  ) {
    SelectProperty.selectLists.children[index].classList?.remove(
      "currentSelectedList"
    );
  }

  e.target.classList.add("currentSelectedList");
  const value = e.target.children[0].children[0].textContent;
  SelectProperty.inputField.children[1].children[0].value = value;
};

const showDropdown = () => {
  SelectProperty.inputField.addEventListener("click", () => {
    SelectProperty.selectLists.classList.toggle("showDropdown");
  });
};

showDropdown();

const widthMapping = () => {
  const width = SelectProperty.inputField.children[1].offsetWidth;
  for (
    let index = 0;
    index < SelectProperty.selectLists.children.length;
    index++
  ) {
    SelectProperty.selectLists.children[index].children[0].style.width =
      width + "px";
  }
};

widthMapping();

SelectProperty.closeDropdownhandler();
