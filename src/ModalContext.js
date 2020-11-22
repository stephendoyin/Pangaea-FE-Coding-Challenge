import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
    document.body.classList.toggle("fix");
  };
  return (
    <ModalContext.Provider value={{ open, toggleModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};
