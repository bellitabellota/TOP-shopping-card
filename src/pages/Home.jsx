import NavBar from "../sections/NavBar";
import styles from "./Home.module.css"

function Home({products}) {
  const productCards = products.map((product) => {
    return <div className={styles.productCard} key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className={styles.productText}>
                <div>
                  <h2>{product.title}</h2>
                  <p className={styles.productDescription}>{product.description}</p>
                </div>
                <p className={styles.productPrice}>{product.price} EUR</p>
              </div>
            </div>
  })

  return (
    <>
      <NavBar />
      <h1>All Products</h1>
      <main>
       {productCards}
      </main>
    </>
  )
}

export default Home;