const toggleTipProperty = {
  mainComponent: document.querySelector(".ui-toggle-tip"),
  toggleTipAction:
    document.querySelector(".ui-toggle-tip").firstElementChild
      .firstElementChild,
  toggleTip: document.querySelector(".ui-toggle-tip").lastElementChild,
};

toggleTipProperty.toggleTipAction.addEventListener("click", () => {
  toggleTipProperty.toggleTip.classList.toggle("showToggletip");
});
