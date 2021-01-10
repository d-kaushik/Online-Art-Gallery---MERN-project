import {
  GET_ITEMS,
  ADD_ITEM,
  ITEM_LOADING,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "./types";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(setItemLoading);
  axios
    .get("http://localhost:5000/artRoutes/")
    .then((res) => dispatch({ type: GET_ITEMS, payload: res.data }));
};
export const addPainting = (newPainting) => (dispatch) => {
  axios
    .post("http://localhost:5000/artRoutes/add", newPainting)
    .then((res) => dispatch({ type: ADD_ITEM, payload: res.data }));
};
export const deletePainting = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/artRoutes/delete/${id}`)
    .then((res) => dispatch({ type: DELETE_ITEM, payload: id }));
};
export const updatePainting = (id, newPainting) => (dispatch) => {
  axios
    .post(`http://localhost:5000/artRoutes/update/${id}`, newPainting)
    .then((res) => dispatch({ type: UPDATE_ITEM, payload: res.data }));
};
export const setItemLoading = () => {
  return {
    type: ITEM_LOADING,
  };
};
