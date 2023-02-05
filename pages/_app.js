import { useState } from 'react';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState([])


  const addToCart = guitar => {
    // change if guitar is in the cart
    if (cart.some(guitarState => guitarState.id === guitar.id)) {
      // Iteration for amount update
      const updateCart = cart.map(guitarState => {
        if (guitarState.id === guitar.id) {
          guitarState.amount = guitar.amount;
        }
        return guitarState;
      });


      setCart([...updateCart]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      setCart([...cart, guitar]);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  const deleteProduct = id => {
    const updateCart = cart.filter(product => product.id != id)
    setCart(updateCart)
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }

  const updateAmount = guitar => {
    const updateCart = cart.map(guitarState => {
      if (guitarState.id === guitar.id) {
        guitarState.amount = parseInt(guitar.amount)
      }
      return guitarState
    })
    setCart(updateCart)
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }

  return <Component {...pageProps}
    cart={cart}
    addToCart={addToCart}
    deleteProduct={deleteProduct}
    updateAmount={updateAmount}
  />
}

export default MyApp
