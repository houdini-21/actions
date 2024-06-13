import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./Routes/routes";
import "./index.css";
import "./assets/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RoutesIndex />
  </BrowserRouter>
);
