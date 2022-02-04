import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    height: "22rem",
  },
};

export const ValidationModal = ({
  activeModal,
  handleModal,
  actionModal,
  messageText,
  titleText,
  buttonText,
}) => {
  return (
    <Modal isOpen={activeModal} style={customStyles}>
      <div className="modal">
        <h1 className="modal-title">{titleText}</h1>
        <span className="modal-message">{messageText}</span>
        <div className="button-footer">
          <button className="btn btn-secondary" onClick={handleModal}>
            Cancelar
          </button>
          <button className="btn btn-primary" onClick={actionModal}>
            {buttonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ValidationModal;
