import React from "react";
import Button from "../button/Button";

function ModalFooter() {
  return (
    <div className="Modal__footer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 0",
          borderTop: "1px solid #2c2e2b",
        }}
      >
        <span>Subtotal</span>
        <span className="subtotal">0</span>
      </div>
      <Button Full={true}>PROCEED TO CHECKOUT</Button>
    </div>
  );
}

export default ModalFooter;
