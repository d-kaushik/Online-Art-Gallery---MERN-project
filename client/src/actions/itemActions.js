import {
  GET_ITEMS,
  ADD_ITEM,
  ITEM_LOADING,
  DELETE_ITEM,
  UPDATE_ITEM,
  ADD_USER,
  LOOK_UP_USER,
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

//USER REDUX
export const getUser = (creds) => (dispatch) => {
  dispatch(setItemLoading);
  axios
    .post("http://localhost:5000/userRoutes/", creds)
    .then((res) => dispatch({ type: LOOK_UP_USER, payload: res.data }));
};
// dispatch({ type: LOOK_UP_USER, payload: res.data })
export const addUser = (user) => (dispatch) => {
  axios
    .post("http://localhost:5000/userRoutes/add", user)
    .then((res) => dispatch({ type: ADD_USER, payload: res.data }))
    .catch((err) => {
      console.log("Invalid Credentials");
    });
};

export const setItemLoading = () => {
  return {
    type: ITEM_LOADING,
  };
};