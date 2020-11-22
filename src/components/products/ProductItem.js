import React, { useContext, useEffect } from "react";
import Button from "../button/Button";
import { ProductContext } from "../../ProductContext";
import { CurrencyContext } from "../../CurrencyContext";

import { ModalContext } from "../../ModalContext";

function ProductItem({ title, id, price, imageUrl }) {
  const { toggleModal } = useContext(ModalContext);
  const { addToCart, products, loading, updateSub } = useContext(
    ProductContext
  );
  const { currency } = useContext(CurrencyContext);

  useEffect(() => {
    updateSub();
  });

  const handleClick = (e, id) => {
    e.preventDefault();
    const cartItem = products.find(function (item) {
      return id === item.id;
    });

    addToCart(cartItem);
    updateSub();
    toggleModal();
  };

  return (
    <div className={id === 7 || id === 12 ? "Hide" : "Product"}>
      <a target="blank" className="Product__thumbnail" href={imageUrl}>
        <img id={id} src={imageUrl} alt="product" className="Product__img" />
      </a>
      <p className="Product__title">{title}</p>

      {loading ? (
        <p>loading..</p>
      ) : (
        <p className="Product__price">
          {new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency,
          }).format(price)}
        </p>
      )}

      <Button onclick={(e) => handleClick(e, id)}>Add to Cart</Button>
    </div>
  );
}

export default ProductItem;
