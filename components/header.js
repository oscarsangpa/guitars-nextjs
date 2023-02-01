import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header>
        <div class="container">
            <Image src="/img/logo.svg" width={300} height={40} alt="guitars logo"/>
        </div>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Store</Link>
        </nav>
    </header>
  )
}

export default Header