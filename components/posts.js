import Image from "next/image"
import Link from "next/link"
import {formatDate} from "../utils/helpers"
import styles from "../styles/blog.module.css"

const Post = ({post}) => {

    const { title, image, url, contain, publishedAt} = post
    const postImage = image.data.attributes.formats.medium.url


    return (
    <article>
        <Image src={postImage} width={600} height={400} alt={`blog image ${title}`} />

        <div className={styles.contain}>
            <h3>{title}</h3>
            <p className={styles.date}>{formatDate(publishedAt)}</p>
            <p className={styles.resume}>{contain}</p>
            <Link className={styles.link} href={`/blog/${url}`}>
                Read Post
            </Link>
        </div>
    </article>
  )
}

export default Post