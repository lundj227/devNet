import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Signup />
  </StrictMode>
);
