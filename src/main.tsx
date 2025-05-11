import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import UoftHacks from "./components/UoftHacks";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {window.location.host.split(".")[0] === "uofthacks" ? (
      <UoftHacks />
    ) : (
      <Home />
    )}
  </StrictMode>
);
