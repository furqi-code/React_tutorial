import { useState } from "react";
import { StatusBar } from "./components/statusBar";
import { useOnlineStatus } from "./hooks/useStatus";
import { useFormInput } from "./hooks/useFormInput";
import { checkEmail } from "./validators";
export function App() {
  /* console.log("INIT APP");
  const [isOnline, setIsOnline] = useOnlineStatus(true);

  return (
    <>
      <button
        id="btn"
        disabled={!isOnline}
        onClick={() => {
          setIsOnline(false);
        }}
      >
        {isOnline ? "Save progress" : "Reconnecting..."}
      </button>
      <StatusBar></StatusBar>
    </>
  );
  */

  const nameProps = useFormInput("SAMPLE", checkEmail);
  const emailProps = useFormInput("a@a.com");

  console.log(nameProps);

  return (
    <>
      <input type="text" pattern="" name="email" id="" {...nameProps} />
      {nameProps.hasError && <h1>NAME IS INCORRECT</h1>}
      <input type="text" name="name" id="" {...emailProps} />
    </>
  );
}
