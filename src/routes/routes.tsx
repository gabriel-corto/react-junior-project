import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Completed } from "../pages/Completeds";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  { 
    path: "/completeds", 
    element: <Completed /> 
  }
])