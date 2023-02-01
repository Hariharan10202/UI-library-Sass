const notificationsError = {
  mainComponent: document.querySelector(".ui-info-notification"),
  notifyAction: document.querySelector(".ui-info-notification")
    .firstElementChild.firstElementChild,
  notifyMessage: document.querySelector(".ui-info-notification")
    .lastElementChild,
  closeAction: document.querySelector(".ui-info-notification").lastElementChild
    .firstElementChild.lastElementChild,
};

notificationsError.notifyAction.addEventListener("click", () => {
  notificationsError.notifyMessage.classList.add("showNotify");
  setTimeout(() => {
    notificationsError.notifyMessage.classList.remove("showNotify");
  }, 5000);
});

notificationsError.closeAction.addEventListener("click", () => {
  notificationsError.notifyMessage.classList.remove("showNotify");
});
