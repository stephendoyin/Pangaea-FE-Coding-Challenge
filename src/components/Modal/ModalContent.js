import React, { useContext } from "react";
import Cart from "../cart/Cart";
import CurrencySelect from "./CurrencySelect";
import Back from "../../chevron-left.svg";
import ModalFooter from "./ModalFooter";

import { ModalContext } from "../../ModalContext";

function ModalContent() {
  const { toggleModal, open } = useContext(ModalContext);

  const handleClick = () => {
    toggleModal();
  };

  return (
    <div
      className={
        open ? "Modal__content animated slideInRight" : "Modal__content"
      }
    >
      <div className="Modal__content__header">
        <div className="Modal__close__Btn">
          <img src={Back} alt="back button" onClick={handleClick} />
        </div>
        <h5>YOUR CART</h5>
      </div>
      <div className="Modal__container">
        <CurrencySelect />
        <Cart />
        <ModalFooter />
      </div>
    </div>
  );
}

export default ModalContent;
