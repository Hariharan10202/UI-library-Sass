const notificationsError = {
  mainComponent: document.querySelector(".ui-error-notification"),
  notifyAction: document.querySelector(".ui-error-notification")
    .firstElementChild.firstElementChild,
  notifyMessage: document.querySelector(".ui-error-notification")
    .lastElementChild,
  closeAction: document.querySelector(".ui-error-notification").lastElementChild
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
