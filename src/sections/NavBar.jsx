import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";
import calculateQuantityCartItems from "../helpers/calculateQuantityCartItems";

function NavBar({selectedProducts}) {
  return(
    <nav>
      <p className={styles.siteName}>Live In Style</p>
      <Link to="cart" className={styles.cardIconContainer}>
        <div data-testid="cart-bubble" className={styles.bubble}>{calculateQuantityCartItems(selectedProducts)}</div>
        <img src="shopping-bag-white-icon.png" alt="cart-icon" />
        <p>Cart</p>
      </Link>
    </nav>
  )
}

export default NavBar;