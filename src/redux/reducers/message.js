import { SET_MESSAGE } from "../actionTypes";

const message = (state = "", action) => {
  switch (action.Type) {
    case SET_MESSAGE: {
      return action.payload.message;
    }
    default: {
      return state;
    }
  }
};

export default message;