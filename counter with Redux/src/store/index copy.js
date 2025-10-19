import { createStore } from "redux";
const InitialState = {
  counter: 0,
  extra: 0,
};

function reducer(state = InitialState, action) {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        extra: state.extra + 1,
      };
      break;

    case "dec":
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;
  }
  return state;
}

export const store = createStore(reducer);
