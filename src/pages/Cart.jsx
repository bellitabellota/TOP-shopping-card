import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const [, , selectedProducts] = useOutletContext();

  const selectedProductsElements = selectedProducts.map((selectedProduct) =>{
    return(
      <div key={selectedProduct.id} className={styles.selectedProduct}>
        <p className={styles.selectedProductTitle}>{selectedProduct.title}</p>
        <p className={styles.selectedProductQuantity}>{selectedProduct.quantity}</p>
        <p className={styles.selectedProductSubtotal}>{(selectedProduct.quantity * (selectedProduct.price * 100)) / 100} €</p>
      </div>
    )
  })

  const total = selectedProducts.reduce((sum, product) => {
    return sum += ((product.quantity * (product.price*100))/100)
  }, 0)


  return(
    <>
      <h1>Your cart</h1>
      <div className={styles.selectedProductContainer}>
        <div className={styles.selectedProductContainerDescription}>
          <p className={styles.selectedProductTitleDescription}>Product</p>
          <p className={styles.selectedProductQuantityDescription}>Quantity</p>
          <p className={styles.selectedProductSubtotalDescription}>Subtotal</p>
        </div>
        {selectedProducts.length === 0 ? <p>No products selected.</p> : selectedProductsElements}

          <div className={styles.totalAmount}>Total: {total.toString()}</div>

      </div>
    </>
  )
}

export default Cart;