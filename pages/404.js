import Layout from "../components/layout";
import Link from "next/link";

const Page404 = () => {
  return (
    <Layout
        title="Page Not Found"
    >
        <p className="error">Page Not Found</p>
        <Link className="error-link" href="/">Go home</Link>
    </Layout>
  )
}

export default Page404;