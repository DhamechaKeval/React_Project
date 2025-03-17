import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyExtraFunction from "./lec1703/test123";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyExtraFunction />
  </StrictMode>
);
