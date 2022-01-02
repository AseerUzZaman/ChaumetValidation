const openValidateModal = () => {
  const validateModal = document.querySelector(".validate.modal");
  validateModal.classList.remove("close");

  setTimeout(() => {
    window.close();
  }, 2000);
};
const openDiscardModal = () => {
  const discardModal = document.querySelector(".discard.modal");
  discardModal.classList.remove("close");

  setTimeout(() => {
    window.close();
  }, 2000);
};
