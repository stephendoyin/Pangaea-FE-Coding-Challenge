import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import ProductItem from "./ProductItem";
import "./Product.css";

function Products() {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const productItem = products.map(
    ({ id, title, image_url, price, quantity }) => (
      <ProductItem
        key={id}
        id={id}
        quantity={quantity}
        title={title}
        imageUrl={image_url}
        price={price}
      />
    )
  );

  return <div className="Product__container">{productItem}</div>;
}

export default Products;
