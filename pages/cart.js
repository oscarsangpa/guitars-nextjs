import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from "../styles/cart.module.css"

function Cart({ cart, updateAmount }) {

  const [total, setTotal] = useState(0)

  useEffect(()=> {
    const totalCalculate = cart.reduce(( total, product )=> total + (product.price * product.amount), 0)
    setTotal(totalCalculate)

  }, [cart])

  return (
    <Layout title="Cart">
      <main className='container'>
        <h1 className='heading'> Cart </h1>

        <div className={styles.contain}>
          <div className={styles.cart}>
            <h2>Articles </h2>

            {
              cart.length === 0 ? "Cart Empty" : (
                cart.map(product => (
                  <div key={product.id} className={styles.product}>
                    <div>
                      <Image src={product.image} width={250} height={480} alt={`image to guitar's ${product.name}`} />
                    </div>
                    <div>
                      <p className={styles.name}>{product.name}</p>

                      <div className={styles.amount}>
                        <p>Amount: </p>

                        <select
                          className={styles.select}
                          value={product.amount} 
                          onChange={e => updateAmount({
                            id: product.id,
                            amount: e.target.value
                          })}
                          >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.price}><span>{product.price}</span>€</p>
                      <p className={styles.subtotal}>Subtotal: <span>{product.amount * product.price}</span>€</p>
                    </div>
                  </div>
                ))
              )
            }

          </div>
          <aside className={styles.resume}>
            <h3>Order Summary: </h3>
            <p>Total: {total}€ </p>
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export default Cart