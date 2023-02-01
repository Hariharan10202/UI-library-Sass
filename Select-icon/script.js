SelectProperty = {
  mainComponent: document.querySelector(".select-label-icon"),
  inputField:
    document.querySelector(".select-label-icon").lastElementChild
      .firstElementChild,
  mainInput:
    document.querySelector(".select-label-icon").lastElementChild
      .firstElementChild.lastElementChild,
  selectLists:
    document.querySelector(".select-label-icon").lastElementChild
      .lastElementChild,
  individualList: document
    .querySelector(".select-label-icon")
    .lastElementChild.lastElementChild.querySelectorAll(".inp-li"),
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
  widthMapping: () => {
    const width = SelectProperty.inputField.children[1].offsetWidth;
    for (
      let index = 0;
      index < SelectProperty.selectLists.children.length;
      index++
    ) {
      SelectProperty.selectLists.children[index].children[0].style.width =
        width + "px";
    }
  },
  showDropdown: () => {
    SelectProperty.inputField.addEventListener("click", () => {
      SelectProperty.selectLists.classList.toggle("showDropdown");
    });
  },
  selectHandler: (e) => {
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
  },
  optionSelectList: () => {
    for (let index = 0; index < SelectProperty.individualList.length; index++) {
      SelectProperty.individualList[index].addEventListener(
        "click",
        SelectProperty.selectHandler
      );
    }
  },
};

SelectProperty.optionSelectList();

SelectProperty.showDropdown();

SelectProperty.widthMapping();

SelectProperty.closeDropdownhandler();
