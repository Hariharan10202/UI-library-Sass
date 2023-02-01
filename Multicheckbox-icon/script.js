const multiSelectProperty = {
  mainComponent: document.querySelector(".multiSelect-label-icon"),
  inputField: document.querySelector(".multiSelect-label-icon").lastElementChild
    .firstElementChild,
  mainInput: document.querySelector(".multiSelect-label-icon").lastElementChild
    .firstElementChild.lastElementChild,
  doneBtn: document.querySelector(".multiSelect-label-icon").lastElementChild
    .lastElementChild.previousElementSibling.firstElementChild.lastElementChild,
  selectList: document.querySelector(".multiSelect-label-icon").lastElementChild
    .lastElementChild.previousElementSibling.firstElementChild.lastElementChild
    .previousElementSibling,
  selectLists: document.querySelector(".multiSelect-label-icon")
    .lastElementChild.lastElementChild.previousElementSibling.firstElementChild,
  individualList: document
    .querySelector(".multiSelect-label-icon")
    .lastElementChild.lastElementChild.previousElementSibling.firstElementChild.lastElementChild.previousElementSibling.querySelectorAll(
      ".ind-li"
    ),
  multiSelect: document.querySelector(".multiSelect-label-icon")
    .lastElementChild,
  listHeading: document.querySelector(".multiSelect-label-icon")
    .lastElementChild.lastElementChild.previousElementSibling.firstElementChild
    .firstElementChild.lastElementChild,
  tooltip: document.querySelector(".multiSelect-label-icon").lastElementChild
    .lastElementChild,
  MultiSelectList: [],
  deSelectedColor: () => {
    return "white";
  },
  SelectedColor: () => {
    return "#e6effc";
  },
  closeDropdownhandler: () => {
    document.addEventListener("click", function (event) {
      let target = event.target;

      const targetElement1 = "." + multiSelectProperty.selectLists.classList[0];
      const targetElement2 = "." + multiSelectProperty.mainInput.classList[0];

      console.log(
        !target.closest(targetElement1),
        !target.closest(targetElement2)
      );

      if (!target.closest(targetElement1) && !target.closest(targetElement2)) {
        multiSelectProperty.selectLists.classList.remove("showDropdown");
      }
    });
  },
  clearAllHandler: (e) => {
    const lists = multiSelectProperty.individualList;

    for (let index = 0; index < lists.length; index++) {
      lists[index].style.backgroundColor =
        multiSelectProperty.deSelectedColor();
      lists[index].children[0].children[0].checked = false;
      multiSelectProperty.MultiSelectList = [];
      multiSelectProperty.inputField.children[1].children[0].value = "";
    }
    TooltipHandler();
  },
  selectAllHandler: (e) => {
    const lists = multiSelectProperty.individualList;

    multiSelectProperty.MultiSelectList = [];
    multiSelectProperty.inputField.children[1].children[0].value = "";

    for (let index = 0; index < lists.length; index++) {
      const targetElement = lists[index].children[0].children[0];

      const targetData = lists[index].children[0].children[1]?.textContent;

      lists[index].style.backgroundColor = multiSelectProperty.SelectedColor();
      targetElement.checked = true;
      multiSelectProperty.MultiSelectList.push(targetData);
    }
    multiSelectProperty.inputField.children[1].children[0].value =
      multiSelectProperty.MultiSelectList.join(",");
    TooltipHandler();
  },
  MultiSelectHandler: () => {
    for (
      let index = 0;
      index < multiSelectProperty.selectList.children.length;
      index++
    ) {
      const targetElement =
        multiSelectProperty.selectList.children[index].children[0].children[0];

      const targetData =
        multiSelectProperty.selectList.children[index].children[0].children[1]
          ?.textContent;

      multiSelectProperty.selectList.children[index].addEventListener(
        "click",
        () => {
          if (targetElement) {
            targetElement.checked =
              targetElement?.checked === true ? false : true;

            if (targetElement?.checked) {
              multiSelectProperty.selectList.children[
                index
              ].style.backgroundColor = multiSelectProperty.SelectedColor();
            } else {
              multiSelectProperty.selectList.children[
                index
              ].style.backgroundColor = multiSelectProperty.deSelectedColor();
            }

            multiSelectProperty.inputField = multiSelectProperty.inputField;

            if (!multiSelectProperty.MultiSelectList.includes(targetData)) {
              multiSelectProperty.MultiSelectList.push(targetData);
              multiSelectProperty.inputField.children[1].children[0].value =
                multiSelectProperty.MultiSelectList.join(",");
            }

            if (!targetElement?.checked) {
              const index =
                multiSelectProperty.MultiSelectList.indexOf(targetData);
              multiSelectProperty.MultiSelectList.splice(index, 1);
              multiSelectProperty.inputField.children[1].children[0].value =
                multiSelectProperty.MultiSelectList.join(",");
            }
            TooltipHandler();
          }
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

multiSelectProperty.mainInput.addEventListener(
  "click",
  multiSelectProperty.toggleDropdownHandler
);

multiSelectProperty.listHeading.firstElementChild.lastElementChild.firstElementChild.addEventListener(
  "click",
  multiSelectProperty.clearAllHandler
);

multiSelectProperty.listHeading.firstElementChild.lastElementChild.lastElementChild.addEventListener(
  "click",
  multiSelectProperty.selectAllHandler
);

// const widthMapping = () => {
//   const width = multiSelectProperty.inputField.children[1].offsetWidth;
//   const selectList = multiSelectProperty.selectList;
//   for (let index = 0; index < selectList.children.length; index++) {
//     selectList.children[index].children[0].style.width = width + "px";
//   }
//   selectList.nextElementSibling.children[0].style.width = width + "px";
// };

// widthMapping();

const toggleTooltipHandler = () => {
  multiSelectProperty.inputField.addEventListener("mouseover", () => {
    multiSelectProperty.tooltip.classList.add("showTooltip");
    multiSelectProperty.tooltip.classList.remove("hideTooltip");
  });

  multiSelectProperty.inputField.addEventListener("mouseout", () => {
    multiSelectProperty.tooltip.classList.remove("showTooltip");
    multiSelectProperty.tooltip.classList.add("hideTooltip");
  });
};

toggleTooltipHandler();

const TooltipHandler = () => {
  while (multiSelectProperty.multiSelect.children[3].firstChild) {
    multiSelectProperty.multiSelect.children[3].removeChild(
      multiSelectProperty.multiSelect.children[3].lastChild
    );
  }

  if (multiSelectProperty.MultiSelectList.length != 0) {
    const tooltipContent = document.createElement("div");
    for (
      let index = 0;
      index < multiSelectProperty.MultiSelectList.length;
      index++
    ) {
      const tooltipData = document.createElement("span");
      tooltipData.textContent = multiSelectProperty.MultiSelectList[index];

      tooltipContent.appendChild(tooltipData);
    }
    multiSelectProperty.multiSelect.children[3].appendChild(tooltipContent);
  }
};

multiSelectProperty.MultiSelectHandler();

const multiSelectSearchhandler = (e) => {
  const value = e.target.value.toLowerCase();

  const listParent = multiSelectProperty.selectList;
  const dropdownParent = multiSelectProperty.selectLists;

  const lists = multiSelectProperty.individualList;
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
    multiSelectProperty.listHeading.style.display = "none";
    dropdownParent.lastElementChild.style.display = "none";
  } else {
    listParent.lastElementChild.style.display = "none";
    multiSelectProperty.listHeading.style.display = "block";
    dropdownParent.lastElementChild.style.display = "block";
  }
};

multiSelectProperty.doneBtn.addEventListener("click", () => {
  multiSelectProperty.selectLists.classList.remove("showDropdown");
});

multiSelectProperty.closeDropdownhandler();
