import Image from "next/image";
import Layout from "../../components/layout";
import { formatDate } from "../../utils/helpers";
import styles from "../../styles/blog.module.css"

export default function PostProduct({post}) {

    const {title, contain, image, publishedAt} = post[0].attributes
    const postImage = image.data.attributes.url

  return (
   <Layout  title={title}>
        <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image src={postImage} width={1000} height={400} alt={`blog image ${title}`} />

        <div className={styles.contain}>
            <h3>{title}</h3>
            <p className={styles.date}>{formatDate(publishedAt)}</p>
            <p className={styles.text}>{contain}</p>
        </div>
    </article>
   </Layout>
  )
}

export async function getServerSideProps( { query: {url} } ){
    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    const {data: post } = await response.json()

    return {
        props: {
           post
        }
    }
}
