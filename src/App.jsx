import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: "cors" })
    .then(response => {
      if(!response.ok) {
        throw new Error("server error")
      }
      return response.json()})
    .then(data => {
      setProducts(data)}
    )
    .catch(error => {
      setError(error)
    })
    .finally(()=> setLoading(false))
    
  }, []);

  if(loading) return <p>Products loading...</p>;
  if(error) return <p>{error.message}</p>;

  return (
    <RouterProvider router={router} />
  )
}

export default App;