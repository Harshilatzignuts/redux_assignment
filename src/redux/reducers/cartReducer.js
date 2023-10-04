import { ActionTypes } from "../constant/action-types";

const initialSate = {
  cartItems: [],
};

export const cartReducer = (state = initialSate, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      console.log(state.cartItems, "cartItems");

      const existingProduct = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
        };
      }

    case ActionTypes.REMOVE_CART_PRODUCT:
      // console.log(payload);
      // console.log(state);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
      };

    case ActionTypes.ADD_QUANTITY:
      console.log(state.cart);
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case ActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === payload && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      //   console.log(state);
      return state;
  }
};
