import React from "react";
import { Modal } from "react-bootstrap";

const ModalContainer = ({ onHideModalContainerRequested, children }) => {
  return (
    <Modal size="lg" show={true} onHide={() => onHideModalContainerRequested()} aria-labelledby="example-modal-sizes-title-lg">
      {children}
    </Modal>
  );
};

export default ModalContainer;
