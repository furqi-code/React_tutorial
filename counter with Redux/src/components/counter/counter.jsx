import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlices";
export function Counter() {
  console.log("INIT");

  // This is basically subscribing to store, now its store responsibility to notify this component the state changes
  const counter = useSelector((state) => {
    return state.counters.value;
  });

  const dispatch = useDispatch();
  // State: a counter value
  //   const [counter, setCounter] = useState(0);

  console.log(counter);

  // View: the UI definition
  return (
    <div>
      Value: {counter} <br></br>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
