const notificationsError = {
  mainComponent: document.querySelector(".ui-warning-notification"),
  notifyAction: document.querySelector(".ui-warning-notification")
    .firstElementChild.firstElementChild,
  notifyMessage: document.querySelector(".ui-warning-notification")
    .lastElementChild,
  closeAction: document.querySelector(".ui-warning-notification")
    .lastElementChild.firstElementChild.lastElementChild,
  closeActionText: document
    .querySelector(".ui-warning-notification")
    .lastElementChild.firstElementChild.firstElementChild.lastElementChild.querySelector(
      "b"
    ),
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

notificationsError.closeActionText.addEventListener("click", () => {
  notificationsError.notifyMessage.classList.remove("showNotify");
});
