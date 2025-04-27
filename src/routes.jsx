import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import App from "./App";

function createRouter() {
  return createBrowserRouter([
    { path: "/",
      element: <App />,
      children: [
        {index: true, element: <Home />},
        {path: "cart", element: <Cart />}
      ]
    }
  ])
}

export default createRouter;