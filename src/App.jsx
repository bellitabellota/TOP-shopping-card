import { RouterProvider } from "react-router-dom";
import createRouter from "./routes";
import useFakeStoreAPI from "./helpers/useFakeStoreAPI";

function App() {
  const { products, error, loading } = useFakeStoreAPI();

  if(loading) return <p>Products loading...</p>;
  if(error) return <p>{error.message}</p>;

  const router = createRouter(products);
 
  return (
    <RouterProvider router={router} />
  )
}

export default App;