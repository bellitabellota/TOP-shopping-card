import { useState, useEffect } from "react";

const useFakeStoreAPI = () => {
  const [products, setProducts] = useState([]);
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

  return { products, error, loading };
}

export default useFakeStoreAPI;