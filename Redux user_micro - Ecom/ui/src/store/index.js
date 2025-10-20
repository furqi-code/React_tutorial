import { createStore } from "redux";

const INITIAL_STATE = {
  isLoggedin: localStorage.getItem("userDetail") ? true : false,
  wishlist: [],
};

export const ACTION_TYPES = {
  updateLogin: "updateLoginState",
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.updateLogin:
      return {
        ...state,
        isLoggedin: action.payload.loginStatus,
      };
      break;
  }
  return state;
}

export const store = createStore(reducer);

console.log(store.getState());
