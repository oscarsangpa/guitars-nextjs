import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"


function AboutUs() {
  return (
    <Layout
    title="About us"    
    >
    <main className="container">
      <h2 className="heading"> About Us</h2>
      <div>
        <Image width={1000} height={800} src="/img/nosotros.jpg" alt="about us image"/>
        <div>
          <p>Duis hendrerit sollicitudin pulvinar. Integer eget eros eget arcu commodo tincidunt non rutrum risus. Morbi ornare vehicula enim, sit amet consectetur magna fringilla sed. Etiam nec ex et lorem maximus placerat. Nunc non ligula tortor. Vestibulum vel purus dictum, aliquet arcu ut, interdum leo. Etiam consectetur dolor ac malesuada maximus. Donec ut neque sed odio tincidunt malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nunc libero, tincidunt ut ante ac, congue euismod urna. Cras rhoncus mauris ac erat consectetur, a pellentesque tortor convallis. Cras tempus purus elementum, maximus nibh at, porta erat. Donec eu magna ut leo placerat blandit. Praesent nibh dui, lacinia sit amet cursus eu, ornare ut ante. Fusce malesuada risus et purus molestie, a varius justo iaculis.</p>

          <p>Praesent porta, arcu vel pellentesque rutrum, neque ligula laoreet augue, a porttitor magna nulla sed ligula. Maecenas luctus feugiat commodo. Pellentesque nec quam ac orci tincidunt viverra. In consectetur id ex a efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor, libero eu posuere scelerisque, nibh dui luctus purus, ut semper felis nibh vitae tellus. In condimentum, nibh vel sagittis malesuada, ante ex elementum nunc, et hendrerit elit lectus non est. Sed eget euismod elit. Suspendisse volutpat augue at tellus tincidunt, sit amet congue lorem euismod. Curabitur rhoncus odio in vestibulum posuere.</p>

        </div>
      </div>
    </main>

    </Layout>
  )
}

export default AboutUs