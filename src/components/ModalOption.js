import React from "react";
import Modal from "react-modal";

const ModalOption = props => (
  <Modal
    isOpen={!!props.handleIsOpen}
    onRequestClose={props.handleCloseModal}
    contentLabel="ModalOption"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">selected option</h3>
    {props.handleIsOpen && <p className="modal_body">{props.handleIsOpen}</p>}
    <button className="button" onClick={props.handleCloseModal}>
      Okay
    </button>
  </Modal>
);

export default ModalOption;
