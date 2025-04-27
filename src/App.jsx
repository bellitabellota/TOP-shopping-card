import { RouterProvider } from "react-router-dom";
import createRouter from "./routes";
import useFakeStoreAPI from "./helpers/useFakeStoreAPI";
import { useState } from "react";
import NavBar from "./sections/NavBar";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProductToCart = (product) => {
    const productCard = document.querySelector(`[data-product-id="${product.id}"]`);
    const inputField = productCard.querySelector("input[type='number']");
    const quantityToAdd = Number(inputField.value);

    setSelectedProducts(prevProducts => {
      const index = prevProducts.findIndex((selectedProduct) =>  selectedProduct.id === product.id);
      const selectedProductsNew = prevProducts.map(product => ({...product}));

      if(index === -1) {
        selectedProductsNew.push({...product, quantity: quantityToAdd});
      } else {
        selectedProductsNew[index].quantity += quantityToAdd;
      }

      return selectedProductsNew;
    });
  }

  const { products, error, loading } = useFakeStoreAPI();
  
  if(loading) return <p>Products loading...</p>;
  if(error) return <p>{error.message}</p>;
  
  const router = createRouter(products, addProductToCart);

  return (
    <>
    <NavBar selectedProducts={selectedProducts} />
    <RouterProvider router={router} />
    </>

  )
}

export default App;