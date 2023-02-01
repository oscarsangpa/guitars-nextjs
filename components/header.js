import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"

const Header = () => {
    const router = useRouter()
    const {pathname} = router

  return (
    <header className={styles.header}>
        <div className={`container ${styles.stick}`}>
            <Link href="/">
                <Image src="/img/logo.svg" width={300} height={40} alt="guitars logo"/>
            </Link>

        <nav className={styles.nav}>
                <Link href="/" className={ pathname === "/" ? styles.active : ""}>
                    Home
                </Link>
            
                <Link href="/about-us" className={ pathname === "/about-us" ? styles.active : ""}>
                    About Us
                </Link>
           
                <Link href="/blog" className={ pathname === "/blog" ? styles.active : ""}>
                    Blog
                </Link>
            
                <Link href="/store" className={ pathname === "/store" ? styles.active : ""}>
                    Store
                </Link>
        </nav>
        </div>
    </header>
  )
}

export default Header