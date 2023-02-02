import React from 'react'
import Guitars from '../components/guitars'
import Layout from '../components/layout'

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  const {data: guitars} = await response.json()

  return {
    props: {
      guitars
    }
  }
} 

const Store = ({guitars}) => {

  return (
    <Layout title="Store">
        
        <main className='container'>
          <h2 className='heading'>Our Collection</h2>

         {guitars.map(guitar => (
          <Guitars
            key={guitar.id}
            guitar={guitar.attributes}
          />
         ))}

        </main>
    </Layout>
  )
}

export default Store