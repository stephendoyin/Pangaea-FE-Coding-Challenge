export const NewIncreasedState = (cart, id) => {
  const elementsIndex = cart.findIndex((element) => element.id === id);
  const newState = [...cart];
  newState[elementsIndex].quantity++;
  return newState;
};

export const NewDecreasedState = (cart, id) => {
  const elementsIndex = cart.findIndex((element) => element.id === id);
  const newState = [...cart];
  newState[elementsIndex].quantity--;
  return newState;
};

// export const RemoveFromCart = (cart, id) => {
//   const newState = cart.filter((item) => item.id !== id);
//   return newState;
// };
