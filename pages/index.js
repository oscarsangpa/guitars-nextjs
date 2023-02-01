import Link from "next/link"

export default function Home() {
  return (
    <>
    <h1>First Steps Next.js!</h1>
    <Link href="/about-us">About Us</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/cart">Cart</Link>
    </>
  )
}
