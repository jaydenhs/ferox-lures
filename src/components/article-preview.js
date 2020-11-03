import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  // <div className={styles.preview}>

  //   <h3 className={styles.previewTitle}>
  //     <Link to={`/blog/${article.slug}`}>{article.title}</Link>
  //   </h3>
  //   <small>{article.publishDate}</small>
  //   <div>{article.description}</div>
  //   {article.tags &&
  //     article.tags.map((tag) => (
  //       <p className={styles.tag} key={tag}>
  //         {tag}
  //       </p>
  //     ))}

  // </div>
  <div class="lg:w-1/4 md:w-1/4 w-1/2 p-4">
    <a class="block relative rounded overflow-hidden mb-2">
      <Img
        alt="ecommerce"
        fluid={article.thumbnail.fluid}
        style={{ maxHeight: '100%' }}
        imgStyle={{ objectFit: 'cover' }}
      />
    </a>
    <div>
      <h5>
        <Link to={`/${article.url}`}>{article.name}</Link>
      </h5>
      <p class="mt-1 caption">{article.description}</p>
      <p class="mt-1 caption">${article.priceCad.toFixed(2)} CAD</p>
    </div>
  </div>
)
