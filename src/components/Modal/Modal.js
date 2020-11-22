import React, { useContext } from "react";
import ModalContent from "./ModalContent";
import { ModalContext } from "../../ModalContext";

import "./Modal.css";

function Modal() {
  const { open } = useContext(ModalContext);
  return (
    <div className={open ? "Modal open" : "Modal"}>
      <ModalContent />
    </div>
  );
}

export default Modal;
