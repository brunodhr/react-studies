import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCities } from 'store/thunks/cities'

const Cities = () => {
  const cities = useSelector(state => state.cities.cities)
  const loading = useSelector(state => state.cities.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCities())
  }, [dispatch])

  useEffect(() => {
    console.log('aaaa', cities)
  }, [cities])

  return (
    <>
      {loading ? (
        'Carregando'
      ) : (
        <select>
          {cities &&
            cities.map(city => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
        </select>
      )}
    </>
  )
}

export default Cities
