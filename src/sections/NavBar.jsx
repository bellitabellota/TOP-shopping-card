import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

function NavBar({selectedProducts}) {
  const calculateQuantityCartItems = () => {
    return selectedProducts.reduce((quantityCardItems, currentCartItem) => {
      return quantityCardItems += currentCartItem.quantity;
    }, 0);
  }

  return(
    <nav>
      <p className={styles.siteName}>Live In Style</p>
      <Link to="cart" className={styles.cardIconContainer}>
        <div className={styles.bubble}>{calculateQuantityCartItems()}</div>
        <img src="public/shopping-bag-white-icon.png" alt="cart-icon" />
        <p>Cart</p>
      </Link>
    </nav>
  )
}

export default NavBar;