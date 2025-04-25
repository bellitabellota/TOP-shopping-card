import NavBar from "../sections/NavBar";

function Home({products}) {
  const productCards = products.map((product) => {
    return <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="product-text">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </div>
  })

  return (
    <>
      <NavBar />
      <main>
        All Items
       {productCards}
      </main>
    </>
  )
}

export default Home;