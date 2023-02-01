import Link from "next/link"
import Layout from "../components/layout"

function AboutUs() {
  return (
    <Layout
    title="About us"    
    >
    <h2>About Us</h2>

    <Link href="/">Go Home</Link>
    </Layout>
  )
}

export default AboutUs