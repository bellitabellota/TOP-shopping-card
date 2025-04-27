import styles from "./ErrorPage.module.css"
import { Link } from "react-router-dom"
function ErrorPage() {
  return(
    <div className={styles.errorBody}>
      <div className={styles.error}>
        <h1 className={styles.errorMessage}>Oops... something has gone wrong.</h1>
        <Link to="/" className={styles.backToHome}>Back to the Homepage</Link>
      </div>
    </div>
  )
}

export default ErrorPage;