import React from 'react'

import Shirt from 'components/Shirt'

import * as S from './styles'

type DetailsProps = {
  color?: string
}

const Details: React.FC<DetailsProps> = ({ color }) => (
  <>
    <S.Container>
      <Shirt color={color} />
    </S.Container>
  </>
)

export default Details
