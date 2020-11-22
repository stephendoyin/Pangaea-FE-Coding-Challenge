import React, { createContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CURRENCY } from "./Query";

export const CurrencyContext = createContext();

export const CurrencyProvider = (props) => {
  const { data, error, loading } = useQuery(GET_CURRENCY);

  const [currency, setCurrency] = useState("USD");

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, data, error, loading }}
    >
      {props.children}
    </CurrencyContext.Provider>
  );
};
