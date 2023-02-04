import Link from "next/link"
import Layout from "../components/layout"
import Guitars from "../components/guitars"
import Posts from "../components/posts"
import styles from "../styles/grid.module.css"
import Course from "../components/course"

export default function Home({guitars, posts, course}) {

  return (
    <Layout 
      title="Home">
        <main className="container">
          <h2 className="heading">Our Collection</h2>
          <div className={styles.grid}>
         {guitars?.map(guitar => (
          <Guitars
            key={guitar.id}
            guitar={guitar.attributes}
          />
         ))}
        </div>

        </main>

        <Course course={course.attributes}/>

        <section className="container">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
        {posts?.map(post => (
          <Posts
            key={post.id}
            post={post.attributes}
          />
        ))}
        </div>

        </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;
  const urlCourse = `${process.env.API_URL}/course?populate=image`;

  const [resGuitars, resPost, resCourse ] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse)
  ])

  const [ {data: guitars}, {data: posts}, { data: course} ] = await Promise.all([
    resGuitars.json(),
    resPost.json(),
    resCourse.json()
  ])

  return {
    props: {
      guitars,
      posts,
      course
    }
  }
}