import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Hero from '../components/hero'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const products = get(this, 'props.data.allContentfulProduct.edges')

    return (
      <>
        <Hero />
        <Layout location={this.props.location}>
          <div style={{ background: '#fff' }} className="px-5 py-8 mx-auto">
            <Helmet title={siteTitle} />
            <section>
              <div>
                <h1 className="mb-6">Our Products</h1>
                <div className="flex flex-wrap -m-4 mb-4">
                  {products.map(({ node }) => {
                    return <ArticlePreview article={node} />
                  })}
                </div>
                <Link to={'shop'}>
                  <button class="flex mx-auto text-white bg-primary border-0 py-2 px-6 rounded text-lg">
                    View All Products
                  </button>
                </Link>
                {/* <h1 className="mb-6">How It's Made</h1> */}
              </div>
            </section>
          </div>
        </Layout>
      </>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct(
      sort: { fields: [updatedAt], order: DESC }
      filter: { onHomepage: { eq: true } }
    ) {
      edges {
        node {
          name
          description
          size
          updatedAt
          priceCad
          url
          thumbnail {
            fluid(maxWidth: 420) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
