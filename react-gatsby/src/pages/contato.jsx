import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Contato = () => (
  <Layout>
    <SEO title="Contato" />
    <h1>Página de contato</h1>
    <Link to="/">Ir para home</Link>
  </Layout>
)

export default Contato
