import Link from "next/link"
import styles from "../styles/footer.module.css"


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.contain}`}>
        <nav className={styles.navegation}>
      <Link href="/">
        Home
      </Link>

      <Link href="/about-us">
        About Us
      </Link>

      <Link href="/blog">
        Blog
      </Link>

      <Link href="/store">
        Store
      </Link>
        </nav>
          <p className={styles.copyright}> Copyrigth { new Date().getFullYear()}</p>
      </div>

    </footer>
  )
}

export default Footer