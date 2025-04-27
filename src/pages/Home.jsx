import styles from "./Home.module.css"
import { useOutletContext } from "react-router-dom";


function Home() {
  const [products, addProductToCart] = useOutletContext();

  const productCards = products.map((product) => {
    const onChangeHandler = (e) => {
      const inputField = document.querySelector("input:focus");
      inputField.value = e.target.value;
    }

    return <div className={styles.productCard} key={product.id} data-product-id={product.id}>
              <img src={product.image} alt={product.title} />
              <div className={styles.productText}>
                <div>
                  <h2>{product.title}</h2>
                  <p className={styles.productDescription}>{product.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.quantityContainer}>
                    <input type="number" defaultValue={1} onChange={onChangeHandler}/>
                    <button onClick={()=> {addProductToCart(product)}}>Add To Cart</button>
                  </div>
                  <p className={styles.productPrice}>{product.price} EUR</p>
                </div>
              </div>
            </div>
  })

  return (
    <>
      <h1>All Products</h1>
      <main>
       {productCards}
      </main>
    </>
  )
}

export default Home;