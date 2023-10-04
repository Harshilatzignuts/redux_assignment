import { ActionTypes } from "../constant/action-types";

export const addProductToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeProductFromCart = (id) => {
  return {
    type: ActionTypes.REMOVE_CART_PRODUCT,
    payload: id,
  };
};

export const increaseQuatity = (id) => {
  return {
    type: ActionTypes.ADD_QUANTITY,
    payload: id,
  };
};

export const decreaseQuatity = (id) => {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: id,
  };
};
