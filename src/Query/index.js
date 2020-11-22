import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
  query GetProducts($currency: Currency = USD) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;
export const GET_CURRENCY = gql`
  query GetCurrency {
    currency
  }
`;
