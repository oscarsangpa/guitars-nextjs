import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout 
      title="Home">

    <h1>First Steps Next.js!</h1>
    <Link href="/about-us">About Us</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/cart">Cart</Link>
    
    </Layout>
  )
}
