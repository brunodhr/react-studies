import React from 'react'
import Products from 'components/Products'
import Places from 'components/Places'
import { Container } from './styles'

const Home = () => {
  return (
    <>
      <Container>
        <Products />
        <Places />
      </Container>
    </>
  )
}

export default Home
