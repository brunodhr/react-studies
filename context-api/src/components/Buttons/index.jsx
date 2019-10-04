import React from 'react'
import { useCounterContext } from 'store/context/Counter'

import * as S from './styles'
const Buttons = () => {
  const { increment, decrement } = useCounterContext()
  return (
    <>
      <S.Button onClick={decrement}>-</S.Button>
      <S.Button onClick={increment}>+</S.Button>
    </>
  )
}

export default Buttons
