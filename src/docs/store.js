import { ACTION_TYPE } from "./action";

const initialState = {
  id: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
