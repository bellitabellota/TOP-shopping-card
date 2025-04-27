import styles from "./NavBar.module.css"

function NavBar({selectedProducts}) {
  const calculateQuantityCartItems = () => {
    return selectedProducts.reduce((quantityCardItems, currentCartItem) => {
      return quantityCardItems += currentCartItem.quantity;
    }, 0);
  }

  return(
    <nav>
      <p className={styles.siteName}>Live In Style</p>
      <div className={styles.cardIconContainer}>
        <div className={styles.bubble}>{calculateQuantityCartItems()}</div>
        <img src="public/shopping-bag-white-icon.png" alt="cart-icon" />
        <p>Cart</p>
      </div>
    </nav>
  )
}

export default NavBar;