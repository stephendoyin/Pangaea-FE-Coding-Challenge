import React, { useContext, useEffect, useState } from "react";
import "./PriceController.css";
import { ProductContext } from "../../ProductContext";
import { CurrencyContext } from "../../CurrencyContext";

function PriceController({ quantity, id }) {
  const { products, incraseCartQuantity, decreaseCartQuantity } = useContext(
    ProductContext
  );
  const { currency } = useContext(CurrencyContext);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    products.forEach((item) => {
      if (item.id === id) {
        setPrice(item.price);
      }
    });
  }, [id, products]);

  const handleIncrease = () => {
    incraseCartQuantity(id);
  };

  const handleChange = () => {
    console.log("wirking");
  };

  const handleDecrease = () => {
    decreaseCartQuantity(id);
  };

  return (
    <div className="PriceController">
      <div className="PriceController__box">
        <span onClick={() => handleDecrease()}>&minus;</span>
        <input
          type="text"
          className="PriceController__input"
          readOnly
          value={quantity}
          onInput={(e) => handleChange()}
        />
        <span onClick={(e) => handleIncrease()}>&#x2b;</span>
      </div>
      <span
        className="Product__price"
        style={{
          fontSize: "1.2rem",
          marginBottom: "0.6rem",
          fontWeight: "400",
        }}
      >
        {new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency,
        }).format(price * quantity)}
      </span>
    </div>
  );
}

export default PriceController;
