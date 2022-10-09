export default class Modal {
  constructor(root, modalOpen) {
    this.modal = root;
    this.modalBody = root.querySelector(`[data-modal-body]`);
    this.modalClose = root.querySelector(`[data-modal-close]`);
    this.modalOpen = modalOpen;
    this.classHidden = `is-hidden`;

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.processOpenedModalEvents = this.processOpenedModalEvents.bind(this);
    this.processClosedModalEvents = this.processClosedModalEvents.bind(this);
    this.handleDocumentKeyPressed = this.handleDocumentKeyPressed.bind(this);
    this.handleOutsideModalClick = this.handleOutsideModalClick.bind(this);
    this.handleModalOpenClick = this.handleModalOpenClick.bind(this);

    this.processClosedModalEvents();
  }

  processOpenedModalEvents() {
    document.addEventListener(`keydown`, this.handleDocumentKeyPressed);
    document.addEventListener(`click`, this.handleOutsideModalClick);
    this.modalClose.addEventListener(`click`, this.close);
    this.modalOpen.removeEventListener(`click`, this.handleModalOpenClick);
  }

  processClosedModalEvents() {
    document.removeEventListener(`keydown`, this.handleDocumentKeyPressed);
    document.removeEventListener(`click`, this.handleOutsideModalClick);
    this.modalClose.removeEventListener(`click`, this.close);
    this.modalOpen.addEventListener(`click`, this.handleModalOpenClick);
  }

  show() {
    const classList = this.modal.classList;
    if (classList.contains(this.classHidden)) {
      classList.remove(this.classHidden);
    }

    this.processOpenedModalEvents();
  }

  close() {
    const classList = this.modal.classList;
    if (!classList.contains(this.classHidden)) {
      classList.add(this.classHidden);
    }
    this.processClosedModalEvents();
  }

  handleModalOpenClick(evt) {
    evt.stopPropagation();
    this.show();
  }

  handleDocumentKeyPressed(evt) {
    if (evt.key === `Escape`) {
      this.close();
    }
  }

  handleOutsideModalClick(evt) {
    if (!this.modalBody.contains(evt.target)) {
      evt.stopPropagation();
      this.close();
    }
  }
}
