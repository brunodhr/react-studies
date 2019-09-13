import React from 'react'

import Layout from 'components/Layout'
import Card from 'components/Card'

import * as S from './styles'

const Home: React.FC = () => (
  <>
    <Layout>
      <S.Container>
        <Card color='blue' />
        <Card color='red' />
        <Card color='green' />
        <Card color='brown' />
        <Card color='white' />
        <Card color='orange' />
        <Card color='pink' />
        <Card color='purple' />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.Container>
    </Layout>
  </>
)

export default Home
