import React from 'react'
import Layout from '../components/layout'
import Posts from '../components/posts'
import styles from "../styles/grid.module.css"


export default function Blog({posts}) {
  
  return (
    <Layout title="Blog">
      <main className='container'>
        <h1 className='heading'>Blog</h1>

        <div className={styles.grid}>
        {posts?.map(post => (
          <Posts
            key={post.id}
            post={post.attributes}
          />
        ))}
        </div>

      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
  const { data: posts } = await response.json()

  return {
    props: {
      posts
    }
  }
}