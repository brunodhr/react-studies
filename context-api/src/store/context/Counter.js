import { useState } from 'react'
import createStore from 'utils/useCreateStore'

function useCounter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prevCount => prevCount + 1)
  const decrement = () => setCount(prevCount => prevCount - 1)
  return { count, increment, decrement }
}

export const useCounterContext = createStore(useCounter)
