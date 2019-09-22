import React from 'react'

import * as S from './styles'

import Shirt from 'components/Shirt'

type CardProps = {
  color?: string
}

const Card: React.FC<CardProps> = ({ color }) => (
  <S.Wrapper>
    <S.Container>
      <S.Link href='/product/1'>
        <Shirt color={color} />
      </S.Link>
    </S.Container>
  </S.Wrapper>
)

export default Card
