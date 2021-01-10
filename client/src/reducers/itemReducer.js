import {
  GET_ITEMS,
  ADD_ITEM,
  ITEM_LOADING,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../actions/types";

const initialState = {
  items: [],
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
        items: [action.payload, ...state.items],
      };
    case ITEM_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
export default reducer;
