const twolineautopopProperty = {
  inputFieldWidth: document.querySelector(".inp-l"),
  mainInput: document.querySelector(".mainInput"),
  inputField:
    document.querySelector(".inp-l").children[1].children[0].children[0],
  autpopList: document.querySelector(".twoline-autopop-list"),
  autpopLists: document.querySelector(".twoline-autopop-lists"),
  individualList: document.querySelectorAll(".ind-li"),
  listHeading: document.querySelector(".li-head-wrap"),
  deSelectOptionList: () => {
    for (
      let index = 0;
      index < twolineautopopProperty.autpopList.children.length;
      index++
    ) {
      twolineautopopProperty.autpopList?.children[index].classList?.remove(
        "currentSelectedList"
      );
    }
  },
  closeDropdownhandler: () => {
    document.addEventListener("click", function (event) {
      let target = event.target;

      const targetElement1 =
        "." + twolineautopopProperty.listHeading.classList[0];
      const targetElement2 =
        "." + twolineautopopProperty.mainInput.classList[0];

      if (!target.closest(targetElement1) && !target.closest(targetElement2)) {
        twolineautopopProperty.autpopLists.classList.remove("showDropdown");
      }
    });
  },
  widthMapping: () => {
    const width =
      twolineautopopProperty.inputFieldWidth.children[1].offsetWidth;
    console.log(width);
    const selectList = twolineautopopProperty.autpopList;
    console.log(selectList);
    for (let index = 0; index < selectList.children.length; index++) {
      selectList.children[index].style.width = width + "px";
    }
  },
  triggerAutopopulateHandler: () => {
    twolineautopopProperty.inputField.addEventListener("keyup", (e) => {
      autoPopSearchHandler(e.target.value);
    });
  },
};

const autoPopSearchHandler = (val) => {
  const value = val;

  twolineautopopProperty.deSelectOptionList();

  const lists = twolineautopopProperty.individualList;
  const listParent = twolineautopopProperty.autpopList;

  const closeCallAction =
    twolineautopopProperty.inputFieldWidth.children[1].children[1];

  adjustTwolineAutoPopulate("none", 36);

  if (value) {
    closeCallAction.classList.add("showCloseAction");
  } else {
    closeCallAction.classList.remove("showCloseAction");
  }

  let count = 0;

  const Inputvalue = twolineautopopProperty.inputField.value.toLowerCase();

  if (value.length >= 3) {
    twolineautopopProperty.autpopLists.classList.add("showDropdown");
    for (let index = 0; index < lists.length; index++) {
      const data = lists[index].children[0].children[0].textContent;

      if (
        data.toLowerCase().includes(value) ||
        data.toLowerCase().includes(Inputvalue)
      ) {
        twolineautopopProperty.autpopLists.classList.add("showDropdown");
        lists[index].style.display = "block";
      } else {
        count++;
        lists[index].style.display = "none";
      }
    }
  } else {
    twolineautopopProperty.autpopLists.classList.remove("showDropdown");
  }

  if (count == lists.length) {
    listParent.lastElementChild.style.display = "block";
    twolineautopopProperty.listHeading.style.display = "none";
  } else {
    listParent.lastElementChild.style.display = "none";
    twolineautopopProperty.listHeading.style.display = "block";
  }
};

twolineautopopProperty.triggerAutopopulateHandler();

autopopProperty.widthMapping();

const twolineautopopHandler = (e) => {
  twolineautopopProperty.deSelectOptionList();

  const targetInputField = twolineautopopProperty.inputFieldWidth;
  // const newNode = e.target.children[0].children[0];

  // targetInputField.replaceChild(
  //   newNode,
  //   targetInputField.children[1].children[0]
  // );

  const subText = adjustTwolineAutoPopulate("block", 46);

  e.target.classList.add("currentSelectedList");
  const targetData1 = e.target.children[0].children[0].children[0].textContent;
  const targetData2 = e.target.children[0].children[0].children[1].textContent;

  twolineautopopProperty.inputField.value = targetData1;
  subText.textContent = targetData2;
};

const adjustTwolineAutoPopulate = (disp, height) => {
  const subText =
    twolineautopopProperty.inputFieldWidth.children[1].children[0].children[1];

  subText.style.display = disp;

  twolineautopopProperty.inputFieldWidth.children[1].style.height =
    height + "px";
  twolineautopopProperty.autpopLists.style.top = top + "px";

  return subText;
};

const clearAutopopulate = (e) => {
  const closeCallAction =
    twolineautopopProperty.inputFieldWidth.children[1].children[1];
  twolineautopopProperty.inputField.value = "";

  twolineautopopProperty.deSelectOptionList();

  adjustTwolineAutoPopulate("none", 36);

  closeCallAction.classList.remove("showCloseAction");
  twolineautopopProperty.autpopLists.classList.remove("showDropdown");
};

twolineautopopProperty.closeDropdownhandler();
