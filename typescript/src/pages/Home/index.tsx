import React from 'react'

import Card from 'components/Card'

import * as S from './styles'

const Home: React.FC = () => (
  <>
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
  </>
)

export default Home
