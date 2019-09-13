import React from 'react'

import * as S from './styles'

import Shirt from 'components/Shirt'

const Card: React.FC = () => (
  <S.Wrapper>
    <S.Container>
      <Shirt />
    </S.Container>
  </S.Wrapper>
)

export default Card
