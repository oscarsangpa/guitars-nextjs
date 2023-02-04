import styles from "../styles/course.module.css"


const Course = ( {course} ) => {

    const {title, contain, image} = course
    const courseImage = image?.data?.attributes?.url


  return (
    <section className={`${styles.course} course`}>
        <style jsx>
            {`
            .course {
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 /.7)),
                url(${courseImage})
            }
            `}
        </style>
        <div className={`container ${styles.grid}`}>
            <div className={styles.contain}>
                <h2 className="heading">{title}!</h2>
                <p>{contain}</p>
            </div>
        </div>
    </section>
  )
}

export default Course