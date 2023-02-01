"use strict";

const panelForm = {
  mainComponent: document.querySelector(".panel-dropdown-icon"),
  inputField: document.querySelector(".panel-dropdown-icon").lastElementChild
    .firstElementChild,
  mainInput: document.querySelector(".panel-dropdown-icon").lastElementChild
    .firstElementChild.lastElementChild,
  form: document.querySelector(".panel-dropdown-icon").lastElementChild
    .lastElementChild.previousElementSibling.firstElementChild,
  panelDropdown: document.querySelector(".panel-dropdown-icon").lastElementChild
    .lastElementChild.previousElementSibling,
  checkboxLists: document
    .querySelector(".panel-dropdown")
    .lastElementChild.previousElementSibling.firstElementChild.querySelectorAll(
      ".checkbox"
    ),
  radioLists: document
    .querySelector(".panel-dropdown")
    .lastElementChild.previousElementSibling.firstElementChild.querySelectorAll(
      ".radio"
    ),
  doneBtn: document.querySelector(".panel-dropdown-icon").lastElementChild
    .lastElementChild.previousElementSibling.firstElementChild.lastElementChild
    .firstElementChild,

  tooltip: document.querySelector(".panel-dropdown-icon").lastElementChild
    .lastElementChild,
  panelFormDetailList: [],
  toggleDropdown: () => {
    panelForm.mainInput.addEventListener("click", () => {
      panelForm.panelDropdown.classList.toggle("showDropdown");
    });
  },
  formHandler: () => {
    panelForm.panelFormDetailList = [];
    for (let index = 0; index < panelForm.checkboxLists.length; index++) {
      const checkbox = panelForm.checkboxLists[index].firstElementChild;
      if (checkbox.checked) {
        panelForm.panelFormDetailList.push(checkbox.value);
      }
    }
    for (let index = 0; index < panelForm.radioLists.length; index++) {
      const radio = panelForm.radioLists[index].firstElementChild;
      if (radio.checked) {
        panelForm.panelFormDetailList.push(radio.value);
      }
    }
    console.log(panelForm.panelFormDetailList);
    panelForm.mainInput.lastElementChild.previousElementSibling.value =
      panelForm.panelFormDetailList.join(",");
    panelForm.tooltipHandler();
  },

  tooltipHandler: () => {
    while (panelForm.tooltip.firstChild) {
      panelForm.tooltip.firstChild.remove();
    }
    const tooltipContent = document.createElement("div");
    for (let index = 0; index < panelForm.panelFormDetailList.length; index++) {
      const tooltip = document.createElement("span");
      tooltip.textContent = panelForm.panelFormDetailList[index];
      tooltipContent.appendChild(tooltip);
    }
    panelForm.tooltip.appendChild(tooltipContent);
  },
  showTooltip: () => {
    panelForm.tooltip.classList.add("showTooltip");
  },
  hideTooltip: () => {
    panelForm.tooltip.classList.remove("showTooltip");
  },
  closeDropdownhandler: () => {
    document.addEventListener("click", function (event) {
      let target = event.target;

      const targetElement1 = "." + panelForm.panelDropdown.classList[0];
      const targetElement2 = "." + panelForm.mainInput.classList[0];

      console.log(
        !target.closest(targetElement1),
        !target.closest(targetElement2)
      );

      if (!target.closest(targetElement1) && !target.closest(targetElement2)) {
        panelForm.panelDropdown.classList.remove("showDropdown");
        panelForm.formHandler();
      }
    });
  },
};

// panelForm.formHandler()vent;
panelForm.formHandler();
panelForm.toggleDropdown();
panelForm.mainInput.addEventListener("mouseover", panelForm.showTooltip);
panelForm.mainInput.addEventListener("mouseout", panelForm.hideTooltip);
panelForm.closeDropdownhandler();

panelForm.doneBtn.addEventListener("click", () => {
  panelForm.formHandler();
  panelForm.panelDropdown.classList.toggle("showDropdown");
});
