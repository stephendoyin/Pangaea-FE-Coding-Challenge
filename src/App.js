import { ApolloProvider } from "@apollo/client";
import client from "./Apollo/index";

import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Modal from "./components/Modal/Modal";
import { ModalProvider } from "./ModalContext";
import { ProductProvider } from "./ProductContext";
import { CurrencyProvider } from "./CurrencyContext";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <CurrencyProvider>
        <ProductProvider>
          <ModalProvider>
            <Header />
            <Products />
            <Modal />
          </ModalProvider>
        </ProductProvider>
      </CurrencyProvider>
    </ApolloProvider>
  );
}

export default App;
