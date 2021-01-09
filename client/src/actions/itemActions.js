import { GET_ITEMS, ADD_ITEM, ITEM_LOADING } from "./types";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(setItemLoading);
  console.log("inside getitems");
  axios
    .get("http://localhost:5000/artRoutes/")
    .then((res) => dispatch({ type: GET_ITEMS, payload: res.data }));
};
export const addPainting = (newPainting) => (dispatch) => {
  axios
    .post("http://localhost:5000/artRoutes/add", newPainting)
    .then((res) => dispatch({ type: ADD_ITEM, payload: res.data }));
};
export const setItemLoading = () => {
  return {
    type: ITEM_LOADING,
  };
};
