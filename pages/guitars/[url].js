import Image from "next/image";
import styles from "../../styles/guitars.module.css"
import Layout from "../../components/layout";
import { useState } from "react";

export default function GuitarProduct({ guitar, addToCart }) {

  const [amount, setAmount] = useState(0)
  const { name, description, image, price } = guitar[0].attributes

  const handleSubmit = (e) => {
    e.preventDefault()

    if (amount < 1) {
      alert("Amount not valid")
      return
    }

    const selectGuitar = {
      id: guitar[0].id,
      image: image.data.attributes.url,
      name,
      price,
      amount,
    }

    addToCart(selectGuitar)

  }

  return (
    <Layout
      title={`${name}'s guitar`}
    >
      <div className={styles.guitar}>
        <Image src={image.data.attributes.url} width={600} height={400} alt={`guitar ${name} image`} />

        <div className={styles.contain}>
          <p>{name}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>{price}€</p>

          <form
            onSubmit={handleSubmit} 
            className={styles.form}>
            <label htmlFor="amount">Amount: </label>
            <select
              onChange={e => setAmount(+e.target.value)}
              id="amount">
              <option value="0">-- Select --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input
              type="submit"
              value="Add to cart"
            />
          </form>
        </div>

      </div>
    </Layout>
  )
}


export async function getStaticPaths() {

  const response = await fetch(`${process.env.API_URL}/guitars`)
  const { data } = await response.json()

  const paths = data.map(guitar => ({
    // params name is necessary in both funtions
    params: {
      url: guitar.attributes.url
    }
  }))

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params: { url } }) {
  const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
  const { data: guitar } = await response.json()


  return {
    props: {
      guitar
    }
  }
}

// export async function getServerSideProps( { query: {url} } ){
//     const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
//     const {data: guitar } = await response.json()


//     return {
//         props: {
//            guitar
//         }
//     }
// }