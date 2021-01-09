import { SET_LOGGED_IN } from "../actionTypes";

const loggedIn = (state = true, action) => {
  switch (action.type) {
    case SET_LOGGED_IN: {
      return action.payload.loggedIn;
    }
    default: {
      return state;
    }
  }
};

export default loggedIn;