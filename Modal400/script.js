modalProperty = {
  modal: document.querySelector("Modal-400"),
  modalAction: document.querySelector(".modalAction"),
  closeModalAction1: document.querySelector(".closeModalAction1"),
  closeModalAction2: document.querySelector(".closeModalAction2"),
  body: document.querySelector("body"),
};

const showModal = () => {
  modalProperty.modalAction.addEventListener("click", () => {
    modalProperty.body.style.overflow = "hidden";

    modalProperty.modalAction.parentElement.nextElementSibling.classList.add(
      "showBackdrop"
    );
    modalProperty.modalAction.parentElement.previousElementSibling.classList.add(
      "showBackdrop"
    );
    modalProperty.modalAction.parentElement.nextElementSibling.classList.remove(
      "hideBackdrop"
    );
    modalProperty.modalAction.parentElement.previousElementSibling.classList.remove(
      "hideBackdrop"
    );
  });
};

const closeCall = () => {
  modalProperty.body.style.overflow = "";
  modalProperty.modalAction.parentElement.nextElementSibling.classList.remove(
    "showBackdrop"
  );
  modalProperty.modalAction.parentElement.previousElementSibling.classList.remove(
    "showBackdrop"
  );
  modalProperty.modalAction.parentElement.nextElementSibling.classList.add(
    "hideBackdrop"
  );
  modalProperty.modalAction.parentElement.previousElementSibling.classList.add(
    "hideBackdrop"
  );
};

const closeModal = () => {
  modalProperty.closeModalAction1.addEventListener("click", () => {
    closeCall();
  });
  modalProperty.closeModalAction2.addEventListener("click", () => {
    closeCall();
  });
};

showModal();
closeModal();
