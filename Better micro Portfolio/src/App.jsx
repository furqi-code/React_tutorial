import { Title } from "./components/title/title.jsx";
import { Button } from "./components/buttons/button.jsx";
import { Discription } from "./components/discription/discription.jsx";
import { useState } from "react";
import { OPTIONS } from "./constants.js";

export function App() {
  // React Hooks -> useState
  const [content, setContent] = useState();

  function onSet(selection) {
    setContent(selection);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <Button title="dfv" clickHandler={() => onSet("home")}>
          Home
        </Button>
        <Button clickHandler={() => onSet("about")}>About</Button>
        <Button clickHandler={() => onSet("contact")}>contact</Button>
      </div>
      <Discription
        title={content ? OPTIONS[content].title : "Please select a value"}
        description={content ? OPTIONS[content].description : ""}
      ></Discription>

      {/* {!content && <h1>Please select a value</h1>}

      {content && (
        <Discription
          title={OPTIONS[content].title}
          description={OPTIONS[content].description}
        ></Discription>
      )} */}

      {/* Using ternary operator */}
      {/* {content ? (
        <Discription
          title={OPTIONS[content].title}
          description={OPTIONS[content].description}
        ></Discription>
      ) : (
        <h1>Please select a value</h1>
      )} */}
    </>
  );
}
