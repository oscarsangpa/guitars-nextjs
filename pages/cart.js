import React from 'react'
import Layout from '../components/layout'
import styles from "../styles/cart.module.css"

function Cart() {
  return (
   <Layout title="Cart">
      <main className='container'>
        <h1 className='heading'> Cart </h1>

        <div className={styles.contain}>
          <div className={styles.cart}>
            <h2>Articles </h2>

          </div>
          <aside className={styles.resume}>
            <h3>Order Summary: </h3>
            <p>Total: </p>
          </aside>
        </div>
      </main>
   </Layout>
  )
}

export default Cart