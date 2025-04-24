import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function createRouter(products) {
  return createBrowserRouter([
    { path: "/",
      element: <Home products={products}/>
    },
    { path: "cart",
      element: <Cart />
    }
  ])
}

export default createRouter;