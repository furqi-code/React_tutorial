const React = require("react");
const ReactDom = require("react-dom/client");

const root = ReactDom.createRoot(document.getElementById("root"));

const text = "Hello from Danish";

root.render(
  <div>
    <h1>{text === "Danish" ? "Usmaan" : "Furqan"}</h1>
    <h2>TEXT</h2>
  </div>
);
