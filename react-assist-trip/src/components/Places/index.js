import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPlaces } from 'store/thunks/places'
// import { Container } from './styles';

const Places = () => {
  const places = useSelector(state => state.places.places)
  const loading = useSelector(state => state.places.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaces())
  }, [dispatch])

  return (
    <>
      {loading ? (
        'Carregando'
      ) : (
        <select>
          {places &&
            places.map((place, index) => (
              <option key={index} value={place.name}>
                {place.name}
              </option>
            ))}
        </select>
      )}
    </>
  )
}

export default Places
