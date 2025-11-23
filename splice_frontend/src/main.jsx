import React from "react";
import { createRoot } from "react-dom/client";
import SpliceLanding from "./spliceLanding";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpliceLanding />
  </React.StrictMode>
);
