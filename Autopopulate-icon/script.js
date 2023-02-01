const autopopProperty = {
  mainComponent: document.querySelector(".autopop-icon"),
  inputFieldWidth:
    document.querySelector(".autopop-icon").lastElementChild.firstElementChild,
  sample: this.inputFieldWidth,
  mainInput:
    document.querySelector(".autopop-icon").lastElementChild.firstElementChild
      .lastElementChild,
  inputField:
    document.querySelector(".autopop-icon").lastElementChild.firstElementChild
      .lastElementChild.lastElementChild.previousElementSibling,

  autpopList:
    document.querySelector(".autopop-icon").lastElementChild.lastElementChild
      .lastElementChild,
  autpopLists:
    document.querySelector(".autopop-icon").lastElementChild.lastElementChild,
  individualList: document
    .querySelector(".autopop")
    .lastElementChild.querySelectorAll(".ind-li"),
  listHeading:
    document.querySelector(".autopop-icon").lastElementChild.lastElementChild
      .firstElementChild,
  closeAction:
    document.querySelector(".autopop-icon").lastElementChild.firstElementChild
      .lastElementChild.lastElementChild,
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
      autopopProperty.autoPopSearchHandler(e.target.value);
    });
  },
  autopopHandler: (e) => {
    autopopProperty.deSelectOptionList();
    e.target.classList.add("currentSelectedList");
    const targetData = e.target.children[0].children[0].textContent;
    autopopProperty.inputField.value = targetData;
  },
  selectOptionListHandler: () => {
    for (
      let index = 0;
      index < autopopProperty.individualList.length;
      index++
    ) {
      autopopProperty.individualList[index].addEventListener(
        "click",
        autopopProperty.autopopHandler
      );
    }
  },
  clearAutopopulate: () => {
    const closeCallAction = autopopProperty.closeAction;
    autopopProperty.inputField.value = "";
    closeCallAction.classList.remove("showCloseAction");
    autopopProperty.autpopLists.classList.remove("showDropdown");
  },
  toggleCloseAction: () => {
    autopopProperty.mainInput.addEventListener("mouseover", () => {
      const closeCallAction = autopopProperty.closeAction;
      const value = autopopProperty.inputField.value;
      if (value) {
        closeCallAction.classList.add("showCloseAction");
      }
    });

    autopopProperty.mainInput.addEventListener("mouseout", () => {
      const closeCallAction = autopopProperty.closeAction;
      closeCallAction.classList.remove("showCloseAction");
    });
  },
  autoPopSearchHandler: (val) => {
    const value = val;

    autopopProperty.deSelectOptionList();

    const lists = autopopProperty.individualList;
    const listParent = autopopProperty.autpopList;

    const closeCallAction = autopopProperty.closeAction;

    if (value) {
      closeCallAction.classList.add("showCloseAction");
    } else {
      closeCallAction.classList.remove("showCloseAction");
    }

    let count = 0;

    const Inputvalue = autopopProperty.inputField.value.toLowerCase();

    if (value.length >= 3) {
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
  },
};

autopopProperty.closeAction.addEventListener(
  "click",
  autopopProperty.clearAutopopulate
);

autopopProperty.selectOptionListHandler();
autopopProperty.toggleCloseAction();

autopopProperty.triggerAutopopulateHandler();

autopopProperty.widthMapping();

autopopProperty.closeDropdownhandler();
