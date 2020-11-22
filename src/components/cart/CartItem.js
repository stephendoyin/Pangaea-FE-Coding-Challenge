import React, { useContext } from "react";
import PriceController from "../price-controller/PriceController";
import x from "../../x.svg";

import { ProductContext } from "../../ProductContext";

function CartItem({ item }) {
  const { closeCartItem } = useContext(ProductContext);
  const handleClick = () => {
    closeCartItem(item.id);
  };

  return (
    <div className="CartItem">
      <div className="CartItem__info">
        <h5 className="CardItem__title">{item.title}</h5>
        <div className="PriceContainer__controller">
          <PriceController id={item.id} quantity={item.quantity} />
        </div>
      </div>
      <div className="CartItem__img-container">
        <span>
          <img
            src={x}
            alt="close"
            onClick={() => handleClick()}
            className="CartItem__close__btn"
          />
        </span>
        <img
          src={item.image_url}
          alt="product thumbnail"
          className="CartItem__thumbnail"
        />
      </div>
    </div>
  );
}

export default CartItem;
