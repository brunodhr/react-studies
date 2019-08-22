import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import SEO from 'components/seo'

// import * as S from './styles'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      <Link to="/Contato/">Contato</Link>
    </Layout>
  )
}

export default IndexPage
