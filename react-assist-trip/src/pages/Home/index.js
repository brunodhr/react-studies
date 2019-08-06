import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlaces } from 'store/thunks/places'

// import { Container } from './styles';

const Home = () => {
  const places = useSelector(state => state.places.places)
  const loading = useSelector(state => state.places.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaces())
  }, [dispatch])
  return (
    <>
      <div>Home Page</div>
      <select>
        {loading
          ? 'Carregando'
          : places &&
            places.map((place, index) => (
              <option key={index} value={place.name}>
                {place.name}
              </option>
            ))}
      </select>
    </>
  )
}

export default Home
