import NavBar from "../sections/NavBar";

function Home({products}) {
  return (
    <>
      <NavBar />
      <main>
        All Items
        {products[0].title}
      </main>
    </>
  )
}

export default Home;