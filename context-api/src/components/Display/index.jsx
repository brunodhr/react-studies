import React from 'react'
import { useCounterContext } from 'store/context/Counter'

const Display = () => {
  const { count } = useCounterContext()
  return <h1>{count}</h1>
}
export default Display
