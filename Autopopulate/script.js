const autopopProperty = {
  inputFieldWidth: document.querySelector(".inp-l"),
  mainInput: document.querySelector(".mainInput"),
  inputField: document.querySelector(".inp-l").children[1].children[1],
  autpopList: document.querySelector(".autopop-list"),
  autpopLists: document.querySelector(".autopop-lists"),
  individualList: document.querySelectorAll(".ind-li"),
  listHeading: document.querySelector(".li-head-wrap"),
  deSelectOptionList: () => {
    for (
      let index = 0;
      index < autopopProperty.autpopList.children.length;
      index++
    ) {
      autopopProperty.autpopList?.children[index].classList?.remove(
        "currentSelectedList"
      );
    }
  },
  widthMapping: () => {
    const width = autopopProperty.inputFieldWidth.children[1].offsetWidth;
    console.log(width);
    const selectList = autopopProperty.autpopList;
    console.log(selectList);
    for (let index = 0; index < selectList.children.length; index++) {
      selectList.children[index].style.width = width + "px";
    }
  },
  closeDropdownhandler: () => {
    document.addEventListener("click", function (event) {
      let target = event.target;

      const targetElement1 = "." + autopopProperty.listHeading.classList[0];
      const targetElement2 = "." + autopopProperty.mainInput.classList[0];

      if (!target.closest(targetElement1) && !target.closest(targetElement2)) {
        autopopProperty.autpopLists.classList.remove("showDropdown");
      }
    });
  },
  triggerAutopopulateHandler: () => {
    autopopProperty.inputField.addEventListener("keyup", (e) => {
      autoPopSearchHandler(e.target.value);
    });
  },
};

const autoPopSearchHandler = (val) => {
  const value = val;

  autopopProperty.deSelectOptionList();

  const lists = autopopProperty.individualList;
  const listParent = autopopProperty.autpopList;

  const closeCallAction =
    autopopProperty.inputFieldWidth.children[1].children[2];

  if (value) {
    closeCallAction.classList.add("showCloseAction");
  } else {
    closeCallAction.classList.remove("showCloseAction");
  }

  let count = 0;

  const Inputvalue = autopopProperty.inputField.value.toLowerCase();

  if (value.length > 3) {
    autopopProperty.autpopLists.classList.add("showDropdown");
    for (let index = 0; index < lists.length; index++) {
      const data = lists[index].children[0].children[0].textContent;

      if (
        data.toLowerCase().includes(value) ||
        data.toLowerCase().includes(Inputvalue)
      ) {
        autopopProperty.autpopLists.classList.add("showDropdown");
        lists[index].style.display = "block";
      } else {
        count++;
        lists[index].style.display = "none";
      }
    }
  } else {
    autopopProperty.autpopLists.classList.remove("showDropdown");
  }

  if (count == lists.length) {
    listParent.lastElementChild.style.display = "block";
    autopopProperty.listHeading.style.display = "none";
  } else {
    listParent.lastElementChild.style.display = "none";
    autopopProperty.listHeading.style.display = "block";
  }
};

autopopProperty.triggerAutopopulateHandler();

autopopProperty.widthMapping();

const autopopHandler = (e) => {
  const targetInputField = autopopProperty.inputFieldWidth;

  autopopProperty.deSelectOptionList();

  // const newNode = e.target.children[0].children[0];

  // targetInputField.replaceChild(
  //   newNode,
  //   targetInputField.children[1].children[0]
  // );

  e.target.classList.add("currentSelectedList");
  const targetData = e.target.children[0].children[0].textContent;
  autopopProperty.inputField.value = targetData;
};

const clearAutopopulate = (e) => {
  const closeCallAction =
    autopopProperty.inputFieldWidth.children[1].children[2];
  autopopProperty.inputField.value = "";
  closeCallAction.classList.remove("showCloseAction");
  autopopProperty.autpopLists.classList.remove("showDropdown");
};

autopopProperty.closeDropdownhandler();
