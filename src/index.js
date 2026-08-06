import React from "react";
//import ReactDOM from "react-dom";
import { hydrate, render } from "react-dom";
//import { render } from "react-snapshot";
import "./index.css";
import App from "./App";

//ReactDOM.hydrate(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
