import { ADD_FLIGHT, DELETE_FLIGHT } from "./actionType";

export const addFlight = (value) => {
  return {
    type: ADD_FLIGHT,
    payload: value,
  };
};

export const deleteFlight = id =>{
    return {
        type : DELETE_FLIGHT,
        payload : id
    }
}
