import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function createRouter(products, addProductToCart) {
  return createBrowserRouter([
    { path: "/",
      element: <Home products={products} addProductToCart={addProductToCart} />
    },
    { path: "cart",
      element: <Cart />
    }
  ])
}

export default createRouter;