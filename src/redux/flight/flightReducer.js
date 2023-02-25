import { ADD_FLIGHT, DELETE_FLIGHT } from "./actionType";

const flightReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      return [...state, action.payload];

    case DELETE_FLIGHT:
      const newArr = [...state].filter((item) => item.id !== action.payload);
      return newArr;

    default:
      return state;
  }
};

export default flightReducer;
