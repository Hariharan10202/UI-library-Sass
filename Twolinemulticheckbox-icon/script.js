const twolinemulcheckboxProp = {
  mainComponent: document.querySelector(".twoline-multiSelect-label-icon"),
  inputField: document.querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.firstElementChild,
  mainInput: document.querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.firstElementChild.lastElementChild,
  doneBtn: document.querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.lastElementChild.previousElementSibling.firstElementChild
    .lastElementChild,
  selectList: document.querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.lastElementChild.previousElementSibling.firstElementChild
    .lastElementChild.previousElementSibling,
  selectLists: document.querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.lastElementChild.previousElementSibling.firstElementChild,
  individualList: document
    .querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.lastElementChild.previousElementSibling.firstElementChild.lastElementChild.previousElementSibling.querySelectorAll(
      ".ind-li"
    ),
  multiSelect: document.querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild,
  innerInput: document.querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.lastElementChild.previousElementSibling.firstElementChild
    .firstElementChild.firstElementChild,
  listHeading: document
    .querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.querySelector(".li-head-wrap"),
  chip: document.querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.lastElementChild,
  chipCloseAction: document
    .querySelector(".twoline-multiSelect-label-icon")
    .lastElementChild.querySelector(".chipCloseAction"),
  MultiSelectList: [],
  closeDropdownhandler: () => {
    document.addEventListener("click", function (event) {
      let target = event.target;

      const targetElement1 =
        "." + twolinemulcheckboxProp.selectLists.classList[0];
      const targetElement2 =
        "." + twolinemulcheckboxProp.mainInput.classList[0];

      console.log(
        !target.closest(targetElement1),
        !target.closest(targetElement2)
      );

      if (!target.closest(targetElement1) && !target.closest(targetElement2)) {
        twolinemulcheckboxProp.selectLists.classList.remove("showDropdown");
      }
    });
  },
  deSelectedColor: () => {
    return "white";
  },
  SelectedColor: () => {
    return "#e6effc";
  },
  twolineMultiSelectSearchhandler: (e) => {
    const value = e.target.value.toLowerCase();

    const listParent = twolinemulcheckboxProp.selectList;
    const dropdownParent = twolinemulcheckboxProp.selectLists;

    const lists = twolinemulcheckboxProp.individualList;
    let count = 0;

    for (let index = 0; index < lists.length; index++) {
      const data = lists[index].children[0].children[1].textContent;

      if (data.toLowerCase().includes(value)) {
        lists[index].style.display = "block";
      } else {
        count++;
        lists[index].style.display = "none";
      }
    }

    if (count == lists.length) {
      listParent.lastElementChild.style.display = "block";
      twolinemulcheckboxProp.listHeading.style.display = "none";
      dropdownParent.lastElementChild.style.display = "none";
    } else {
      listParent.lastElementChild.style.display = "none";
      twolinemulcheckboxProp.listHeading.style.display = "block";
      dropdownParent.lastElementChild.style.display = "block";
    }
  },
  clearAllHandler: (e) => {
    const lists = twolinemulcheckboxProp.individualList;

    for (let index = 0; index < lists.length; index++) {
      lists[index].style.backgroundColor =
        twolinemulcheckboxProp.deSelectedColor();
      lists[index].children[0].children[0].checked = false;
      twolinemulcheckboxProp.MultiSelectList = [];
      twolinemulcheckboxProp.inputField.children[1].children[0].value = "";
    }
    ChipHandler();
  },
  selectAllHandler: (e) => {
    const lists = twolinemulcheckboxProp.individualList;

    twolinemulcheckboxProp.MultiSelectList = [];
    twolinemulcheckboxProp.inputField.children[1].children[0].value = "";

    for (let index = 0; index < lists.length; index++) {
      const targetElement = lists[index].children[0].children[0];

      lists[index].style.backgroundColor =
        twolinemulcheckboxProp.SelectedColor();

      const targetData =
        lists[index].children[0].children[1].children[0].textContent;

      targetElement.checked = true;
      twolinemulcheckboxProp.MultiSelectList.push(targetData);
    }
    twolinemulcheckboxProp.inputField.children[1].children[0].value =
      twolinemulcheckboxProp.MultiSelectList.join(",");
    ChipHandler();
  },
  MultiSelectHandler: () => {
    for (
      let index = 0;
      index < twolinemulcheckboxProp.selectList.children.length;
      index++
    ) {
      const targetElement =
        twolinemulcheckboxProp.selectList.children[index].children[0]
          .children[0];

      const targetData =
        twolinemulcheckboxProp.selectList.children[index].children[0]
          .children[1]?.children[0].textContent;

      twolinemulcheckboxProp.selectList.children[index].addEventListener(
        "click",
        () => {
          targetElement.checked = targetElement.checked === true ? false : true;

          if (targetElement.checked) {
            twolinemulcheckboxProp.selectList.children[
              index
            ].style.backgroundColor = twolinemulcheckboxProp.SelectedColor();
          } else {
            twolinemulcheckboxProp.selectList.children[
              index
            ].style.backgroundColor = twolinemulcheckboxProp.deSelectedColor();
          }

          twolinemulcheckboxProp.inputField = twolinemulcheckboxProp.inputField;

          if (!twolinemulcheckboxProp.MultiSelectList.includes(targetData)) {
            twolinemulcheckboxProp.MultiSelectList.push(targetData);
            twolinemulcheckboxProp.inputField.children[1].children[0].value =
              twolinemulcheckboxProp.MultiSelectList.join(",");
          }

          if (!targetElement.checked) {
            const index =
              twolinemulcheckboxProp.MultiSelectList.indexOf(targetData);
            twolinemulcheckboxProp.MultiSelectList.splice(index, 1);
            twolinemulcheckboxProp.inputField.children[1].children[0].value =
              twolinemulcheckboxProp.MultiSelectList.join(",");
          }
          ChipHandler();
        }
      );
    }
  },
  toggleDropdownHandler: (e) => {
    e.target.parentElement.nextElementSibling.nextElementSibling.children[0].classList.toggle(
      "showDropdown"
    );
  },
};

twolinemulcheckboxProp.listHeading.firstElementChild.lastElementChild.firstElementChild.addEventListener(
  "click",
  twolinemulcheckboxProp.clearAllHandler
);

twolinemulcheckboxProp.listHeading.firstElementChild.lastElementChild.lastElementChild.addEventListener(
  "click",
  twolinemulcheckboxProp.selectAllHandler
);

twolinemulcheckboxProp.innerInput.firstElementChild.lastElementChild.previousElementSibling.addEventListener(
  "keyup",
  twolinemulcheckboxProp.twolineMultiSelectSearchhandler
);

twolinemulcheckboxProp.mainInput.addEventListener(
  "click",
  twolinemulcheckboxProp.toggleDropdownHandler
);

const ChipHandler = () => {
  while (twolinemulcheckboxProp.multiSelect.children[3].firstChild) {
    twolinemulcheckboxProp.multiSelect.children[3].removeChild(
      twolinemulcheckboxProp.multiSelect.children[3].lastChild
    );
  }

  if (twolinemulcheckboxProp.MultiSelectList.length != 0) {
    for (
      let index = 0;
      index < twolinemulcheckboxProp.MultiSelectList.length;
      index++
    ) {
      const chipContent = document.createElement("div");
      const chipData = document.createElement("span");
      const closeAction = document.createElement("small");
      closeAction.classList = "chipCloseAction";
      closeAction.setAttribute("onclick", "childRemoveHandler(event)");

      chipData.textContent = twolinemulcheckboxProp.MultiSelectList[index];

      chipContent.appendChild(chipData);
      chipContent.appendChild(closeAction);
      twolinemulcheckboxProp.chip.appendChild(chipContent);
    }
  }
};

twolinemulcheckboxProp.MultiSelectHandler();

const childRemoveHandler = (e) => {
  const targetList = e.target.parentElement;

  for (
    let index = 0;
    index < twolinemulcheckboxProp.MultiSelectList.length;
    index++
  ) {
    const targetData = targetList.children[0].textContent;

    if (targetData == twolinemulcheckboxProp.MultiSelectList[index]) {
      twolinemulcheckboxProp.chip.removeChild(targetList);

      twolinemulcheckboxProp.MultiSelectList.splice(index, 1);
      twolinemulcheckboxProp.inputField.children[1].children[0].value =
        twolinemulcheckboxProp.MultiSelectList.join(",");
    }
  }

  for (
    let index = 0;
    index < twolinemulcheckboxProp.selectList.children.length;
    index++
  ) {
    const targetData =
      twolinemulcheckboxProp.selectList.children[index]?.children[0]
        ?.children[1]?.children[0]?.textContent;

    const targetElement =
      twolinemulcheckboxProp.selectList.children[index]?.children[0]
        ?.children[0];

    if (!twolinemulcheckboxProp.MultiSelectList.includes(targetData)) {
      if (targetElement) {
        targetElement.checked = false;
        twolinemulcheckboxProp.selectList.children[
          index
        ].style.backgroundColor = twolinemulcheckboxProp.deSelectedColor();
      }
    }
  }
};

twolinemulcheckboxProp.doneBtn.addEventListener("click", () => {
  twolinemulcheckboxProp.selectLists.classList.remove("showDropdown");
});

twolinemulcheckboxProp.closeDropdownhandler();
