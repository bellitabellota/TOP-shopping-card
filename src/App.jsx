import { RouterProvider } from "react-router-dom";
import router from "./routes";
import useFakeStoreAPI from "./helpers/useFakeStoreAPI";

function App() {
  const { products, error, loading } = useFakeStoreAPI();

  if(loading) return <p>Products loading...</p>;
  if(error) return <p>{error.message}</p>;

  return (
    <RouterProvider router={router} />
  )
}

export default App;