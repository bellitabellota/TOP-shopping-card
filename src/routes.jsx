import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

function createRouter() {
  return createBrowserRouter([
    { path: "/",
      element: <App />,
      children: [
        {index: true, element: <Home />},
        {path: "cart", element: <Cart />}
      ],
      errorElement: <ErrorPage />
    }
  ])
}

export default createRouter;