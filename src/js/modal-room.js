(() => {
  const modalRoom = {
    openModalBtn: document.querySelector("[data-modal-open-room]"),
    closeModalBtn: document.querySelector("[data-modal-close-room]"),
    modal: document.querySelector("[data-modal-room]"),
  };

  modalRoom.openModalBtn.addEventListener("click", toggleModal);
  modalRoom.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalRoom.modal.classList.toggle("is-hidden");
  }
})();


(() => {
  const modalPrice1 = {
    openModalBtn: document.querySelector("[data-modal-open-price1]"),
    closeModalBtn: document.querySelector("[data-modal-close-price1]"),
    modal: document.querySelector("[data-modal-price1]"),
  };

  modalPrice1.openModalBtn.addEventListener("click", toggleModal);
  modalPrice1.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    modalPrice1.modal.classList.toggle("is-hidden");
  }
})();
