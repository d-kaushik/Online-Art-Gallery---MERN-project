import { GET_ITEMS, ADD_ITEM, ITEM_LOADING } from "../actions/types";
import axios from "axios";
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
    // case ADD_ITEM: {
    //   axios
    //     .post("http://localhost:5000/artRoutes/add", action.payload)
    //     .then((res) => console.log(res.data));
    // }
    case ADD_ITEM:
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
