import { Title } from "./components/title/title.jsx";
import { Button } from "./components/buttons/button.jsx";
import { Discription } from "./components/discription/discription.jsx";
import { useState } from "react";
import { OPTIONS, BUTTONS } from "./constants.js";

export function App() {
  const [content, setContent] = useState();

  function onSet(selection) {
    setContent(selection);
  }
  return (
    <>
      <Title content={content}></Title>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        {BUTTONS.map((buttonTitle) => (
          <Button onClick={() => onSet(buttonTitle)}>{buttonTitle}</Button>
        ))}
      </div>
      <Discription
        title={content ? OPTIONS[content].title : "Please select a value"}
        description={content ? OPTIONS[content].description : ""}
      ></Discription>
    </>
  );
}

{
  /* <Button title="dfv" clickHandler={() => onSet("home")}>
          Home
        </Button>
        <Button clickHandler={() => onSet("about")}>About</Button>
        <Button clickHandler={() => onSet("contact")}>contact</Button> */
}
