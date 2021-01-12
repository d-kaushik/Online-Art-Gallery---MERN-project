import {
  GET_ITEMS,
  ADD_ITEM,
  ITEM_LOADING,
  DELETE_ITEM,
  UPDATE_ITEM,
  ADD_USER,
  LOOK_UP_USER,
} from "../actions/types";

const initialState = {
  items: [],
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        // items: [action.payload, ...state.items],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_USER:
      return {
        ...state,
      };
    case LOOK_UP_USER:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;