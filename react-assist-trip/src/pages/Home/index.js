import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlaces } from 'store/thunks/places'

// import { Container } from './styles';

const Home = () => {
  const places = useSelector(state => state.places.places)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaces())
  }, [])
  return (
    <>
      <div>Home Page</div>
      <select>
        {places &&
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
