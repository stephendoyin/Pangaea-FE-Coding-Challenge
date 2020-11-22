import React, { createContext, useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "./Query";
import { NewIncreasedState, NewDecreasedState } from "./Helpers/";
import { CurrencyContext } from "./CurrencyContext";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const { loading, error, data, refetch } = useQuery(ALL_PRODUCTS, {
    variables: {
      currency: "USD",
    },
  });

  const { currency } = useContext(CurrencyContext);
  const [cart, setcart] = useState([]);
  const [products, setproducts] = useState([]);
  const [subtotal, setSubTotal] = useState([0]);

  useEffect(() => {
    if (data) {
      const updatedData = data.products.map((obj) => ({
        ...obj,
        quantity: 0,
      }));
      setproducts(updatedData);
    }
  }, [data]);

  function addToCart(cartItem) {
    let contains = false;

    cart.forEach((item) => {
      if (item.id === cartItem.id) {
        contains = true;
      }
    });

    if (contains) {
      setcart(NewIncreasedState(cart, cartItem.id));
    } else if (!contains) {
      cartItem.quantity++;
      setcart([...cart, cartItem]);
    }
  }

  function incraseCartQuantity(id) {
    setcart(NewIncreasedState(cart, id));
    updateSub();
  }

  function decreaseCartQuantity(id) {
    setcart(NewDecreasedState(cart, id));
  }

  function updateCurrency(currency) {
    refetch({
      currency,
    });
    const updatedData = data.products.map((obj) => ({
      ...obj,
      quantity: 0,
    }));
    setproducts(updatedData);
    setcart(cart, updatedData);
    if (updatedData) {
      updateSub();
    }
  }

  function closeCartItem(id) {
    const elementsIndex = cart.findIndex((element) => element.id === id);
    const newCart = [...cart];
    newCart[elementsIndex].quantity = 0;
    setcart(newCart);
  }

  function updateSub() {
    const sub = document.querySelector(".subtotal");
    let number = 0;
    cart.forEach((item) => {
      if (item.quantity >= 1) {
        const elementsIndex = products.findIndex(
          (product) => product.id === item.id
        );
        number += products[elementsIndex].price * item.quantity;
      }
    });
    sub.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency,
    }).format(number);
  }

  return (
    <ProductContext.Provider
      value={{
        cart,
        products,
        incraseCartQuantity,
        decreaseCartQuantity,
        setSubTotal,
        subtotal,
        updateCurrency,
        closeCartItem,
        addToCart,
        updateSub,
        data,
        loading,
        error,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
