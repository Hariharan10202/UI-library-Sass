const notificationsError = {
  mainComponent: document.querySelector(".ui-success-notification"),
  notifyAction: document.querySelector(".ui-success-notification")
    .firstElementChild.firstElementChild,
  notifyMessage: document.querySelector(".ui-success-notification")
    .lastElementChild,
  closeAction: document.querySelector(".ui-success-notification")
    .lastElementChild.firstElementChild.lastElementChild,
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
