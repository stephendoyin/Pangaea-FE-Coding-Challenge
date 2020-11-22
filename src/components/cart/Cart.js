import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(ProductContext);

  return (
    <div className="CartItem-Container">
      {cart
        .filter((item) => item.quantity > 0)
        .map((filteredItem) => (
          <CartItem key={filteredItem.id} item={filteredItem} />
        ))}
    </div>
  );
}

export default Cart;
