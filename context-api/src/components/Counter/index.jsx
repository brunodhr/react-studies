import React from 'react'
import { useCounterContext } from 'store/context/Counter'

import Display from 'components/Display'
import Buttons from 'components/Buttons'

export default function Counter() {
  return (
    <useCounterContext.Provider>
      <h3>Counter</h3>
      <Display />
      <Buttons />
    </useCounterContext.Provider>
  )
}
