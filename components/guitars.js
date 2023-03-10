import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitars.module.css"

export default function Guitars( { guitar } ){

  const {name, description, price, url, image } = guitar;
  const guitarImage = image.data.attributes.formats.medium.url

  
  return (
    <div className={styles.guitar}>
      <Image src={guitarImage} width={600} height={400} alt={`guitar ${name} image`}/>

      <div className={styles.contain}>
        <p>{name}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}€</p>
        <Link className={styles.link} href={`/guitars/${url}`}>More details </Link>
      </div>
    </div>
  )
}



