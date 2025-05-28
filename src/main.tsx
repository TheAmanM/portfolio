import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import UoftHacks from "./components/UoftHacks";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";

const getSubdomain = () => window.location.host.split(".")[0];

export default function App() {
  switch (getSubdomain()) {
    case "uofthacks":
      return (
        <BrowserRouter>
          <Switch>
            <Route path="*">
              <UoftHacks />
            </Route>
          </Switch>
        </BrowserRouter>
      );
    default:
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      );
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
