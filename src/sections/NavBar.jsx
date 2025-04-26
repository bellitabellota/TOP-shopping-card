import styles from "./NavBar.module.css"

function NavBar() {
  return(
    <nav>
      <p className={styles.siteName}>Live In Style</p>
      <div className={styles.cardIconContainer}>
        <img src="public/shopping-bag-white-icon.png" alt="cart-icon" />
        <p>Cart</p>
      </div>
    </nav>
  )
}

export default NavBar;