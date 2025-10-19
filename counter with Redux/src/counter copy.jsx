import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export function Counter() {
  console.log("INIT");

  // This is basically subscribing to store, now its store responsibility to notify this component the state changes
  const counter = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();
  // State: a counter value
  //   const [counter, setCounter] = useState(0);

  console.log(counter);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    // setCounter((prevCounter) => prevCounter + 1);
    dispatch({
      type: "inc",
    });
  };

  const decrement = () => {
    // setCounter((prevCounter) => prevCounter - 1);
    dispatch({
      type: "dec",
    });
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter} <br></br>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
