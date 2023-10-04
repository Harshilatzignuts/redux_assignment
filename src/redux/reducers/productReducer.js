import { ActionTypes } from "../constant/action-types";

const initialSate = {
  SAMPLE_PRDDUCTS: [
    {
      id: "p1",
      price: 6,
      title: "Man Perfume",
      description: "Denver - Hamilton",
    },
    {
      id: "p2",
      price: 5,
      title: "Man Deo",
      description: "Navia - 24 hours refreshment",
    },
  ],
};

export const productReducer = (state = initialSate, { type, payload }) => {
  // console.log(state);
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, SAMPLE_PRDDUCTS: payload };
    default:
      return state;
  }
};
