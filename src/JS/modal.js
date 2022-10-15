import '../sass/components/modal.scss';

const TIMEOUT = 250;

export default class Modal {
  constructor(component, onOpen) {
    this.classHidden = `is-modal-hidden`;

    this.onOpen = onOpen();
    this.modal = document.querySelector(`[data-modal]`) || this.createModal();
    this.modalBody = this.modal.querySelector(`[data-modal-body]`);
    this.modalClose = this.modal.querySelector(`[data-modal-close]`);
    this.close();

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.processOpenedModalEvents = this.processOpenedModalEvents.bind(this);
    this.processClosedModalEvents = this.processClosedModalEvents.bind(this);
    this.handleDocumentKeyPressed = this.handleDocumentKeyPressed.bind(this);
    this.handleOutsideModalClick = this.handleOutsideModalClick.bind(this);

    setTimeout(() => {
      this.modalBody.innerHTML = component.outerHTML;
      this.show();
    }, TIMEOUT);
  }

  createModal() {
    const modal = document.createElement(`div`);
    const modalBody = document.createElement(`div`);
    const modalCloseBtn = document.createElement(`button`);

    modal.setAttribute(`data-modal`, ``);
    modalBody.setAttribute(`data-modal-body`, ``);
    modalCloseBtn.setAttribute(`data-modal-close`, ``);

    modal.appendChild(modalCloseBtn);
    modal.appendChild(modalBody);

    document.body.appendChild(modal);
    return modal;
  }

  processOpenedModalEvents() {
    document.addEventListener(`keydown`, this.handleDocumentKeyPressed);
    document.addEventListener(`click`, this.handleOutsideModalClick);
    this.modalClose.addEventListener(`click`, this.close);
  }

  processClosedModalEvents() {
    document.removeEventListener(`keydown`, this.handleDocumentKeyPressed);
    document.removeEventListener(`click`, this.handleOutsideModalClick);
  }

  show() {
    const classList = this.modal.classList;
    classList.remove(this.classHidden);

    this.processOpenedModalEvents();
    onOpen(this.modal);
  }

  close() {
    const classList = this.modal.classList;
    if (!classList.contains(this.classHidden)) {
      classList.add(this.classHidden);
    }

    this.processClosedModalEvents();
  }

  handleDocumentKeyPressed(evt) {
    if (evt.key === `Escape`) {
      this.close();
    }
  }

  handleOutsideModalClick(evt) {
    if (!this.modal.contains(evt.target)) {
      this.close();
    }
  }
}
