import "./index.css";
import "@maptalks/gltf-layer";
import "@maptalks/transcoders.draco";
import "maptalks/dist/maptalks.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
