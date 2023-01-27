growInputProperty = {
  inputFieldWidth: document.querySelector(".inp-l"),
  mainInput: document.querySelector(".growing-inp"),
  inputField: document.querySelector(".inp-l").children[1].children[0],
  autpopList: document.querySelector(".growInput-list"),
  autpopLists: document.querySelector(".growInput-lists"),
  individualList: document.querySelectorAll(".ind-li"),
  listHeading: document.querySelector(".li-head-wrap"),
  optionList: [],
  deSelectOptionList: () => {
    for (
      let index = 0;
      index < growInputProperty.autpopList.children.length;
      index++
    ) {
      growInputProperty.autpopList?.children[index].classList?.remove(
        "currentDisabledList"
      );
    }
  },
  createChipHandler: (data) => {
    const chipContent = document.createElement("div");
    chipContent.classList = "chipContent";
    const chipData = document.createElement("span");
    chipData.textContent = data;
    const closeAction = document.createElement("small");
    closeAction.classList = "chipCloseAction";
    closeAction.setAttribute("onclick", "chipRemoveHandler(event)");

    chipContent.appendChild(chipData);
    chipContent.appendChild(closeAction);

    return chipContent;
  },
  closeDropdownhandler: () => {
    document.addEventListener("click", function (event) {
      let target = event.target;

      const targetElement1 = "." + growInputProperty.listHeading.classList[0];
      const targetElement2 = "." + growInputProperty.mainInput.classList[0];

      if (!target.closest(targetElement1) && !target.closest(targetElement2)) {
        growInputProperty.autpopLists.classList.remove("showDropdown");
      }
    });
  },
  widthMapping: () => {
    const width = growInputProperty.inputFieldWidth.children[1].offsetWidth;
    console.log(width);
    const selectList = growInputProperty.autpopList;
    console.log(selectList);
    for (let index = 0; index < selectList.children.length; index++) {
      selectList.children[index].style.width = width + "px";
    }
  },
  triggerAutopopulateHandler: () => {
    growInputProperty.inputField.addEventListener("keyup", (e) => {
      growInputSearchHandler(e.target.value);
    });
  },
};

const growInputSearchHandler = (val) => {
  const value = val;

  const lists = growInputProperty.individualList;
  const listParent = growInputProperty.autpopList;

  let count = 0;

  const Inputvalue = growInputProperty.inputField.value.toLowerCase();

  if (value.length > 3) {
    growInputProperty.autpopLists.classList.add("showDropdown");
    for (let index = 0; index < lists.length; index++) {
      const data = lists[index].children[0].children[0].textContent;

      if (
        data.toLowerCase().includes(value) ||
        data.toLowerCase().includes(Inputvalue)
      ) {
        growInputProperty.autpopLists.classList.add("showDropdown");
        lists[index].style.display = "block";
      } else {
        count++;
        lists[index].style.display = "none";
      }
    }
  } else {
    growInputProperty.autpopLists.classList.remove("showDropdown");
  }

  if (count == lists.length) {
    listParent.lastElementChild.style.display = "block";
    growInputProperty.listHeading.style.display = "none";
  } else {
    listParent.lastElementChild.style.display = "none";
    growInputProperty.listHeading.style.display = "block";
  }
};

growInputProperty.triggerAutopopulateHandler();

growInputProperty.widthMapping();

const growInputHandler = (e) => {
  e.target.classList.add("currentDisabledList");
  console.log(e.target);

  const targetData = e.target.children[0].children[0].textContent;

  const newNode = growInputProperty.createChipHandler(targetData);

  growInputProperty.optionList.push(targetData);

  growInputProperty.inputFieldWidth.children[1].insertBefore(
    newNode,
    growInputProperty.inputFieldWidth.children[1].lastElementChild
  );

  growInputProperty.inputField.value = "";
  growInputProperty.widthMapping();
};

// const clearAutopopulate = (e) => {
//   const closeCallAction =
//     growInputProperty.inputFieldWidth.children[1].children[2];
//   growInputProperty.inputField.value = "";
//   closeCallAction.classList.remove("showCloseAction");
//   growInputProperty.autpopLists.classList.remove("showDropdown");
// };

const chipRemoveHandler = (e) => {
  const targetData = e.target.previousElementSibling.textContent;
  const targetElement = e.target.parentElement;

  for (let index = 0; index < growInputProperty.optionList.length; index++) {
    if (targetData == growInputProperty.optionList[index]) {
      targetElement.remove();
      growInputProperty.optionList.splice(index, 1);
      break;
    }
  }

  for (
    let index = 0;
    index < growInputProperty.autpopList.children.length;
    index++
  ) {
    const targetData =
      growInputProperty.autpopList.children[index]?.children[0]?.children[0]
        ?.textContent;

    if (!growInputProperty.optionList.includes(targetData)) {
      growInputProperty.autpopList.children[index].classList.remove(
        "currentDisabledList"
      );
    }
  }
};

growInputProperty.closeDropdownhandler();
