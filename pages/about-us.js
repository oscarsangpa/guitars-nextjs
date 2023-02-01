import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/about-us.module.css"


function AboutUs() {
  return (
    <Layout
    title="About us"    
    >
    <main className="container">
      <h2 className="heading"> About Us</h2>
      <div className={styles.contain}>
        <Image width={1000} height={800} src="/img/nosotros.jpg" alt="about us image"/>
        <div>
          <p>Duis hendrerit sollicitudin pulvinar. Integer eget eros eget arcu commodo tincidunt non rutrum risus. Morbi ornare vehicula enim, sit amet consectetur magna fringilla sed. Etiam nec ex et lorem maximus placerat. Nunc non ligula tortor. Vestibulum vel purus dictum, aliquet arcu ut, interdum leo. Etiam consectetur dolor ac malesuada maximus. Donec ut neque sed odio tincidunt malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

          <p>Praesent porta, arcu vel pellentesque rutrum, neque ligula laoreet augue, a porttitor magna nulla sed ligula. Maecenas luctus feugiat commodo. Pellentesque nec quam ac orci tincidunt viverra. In consectetur id ex a efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        </div>
      </div>
    </main>

    </Layout>
  )
}

export default AboutUs