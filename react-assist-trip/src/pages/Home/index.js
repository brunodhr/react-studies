import React from 'react'
import Button from 'components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { getPlaces } from 'store/thunks/places'

// import { Container } from './styles';

const Home = () => {
  const places = useSelector(state => state.places.places)
  const dispatch = useDispatch()

  const handlePeoples = async event => {
    event.preventDefault()

    dispatch(getPlaces())
  }
  return (
    <>
      <div>Home Page</div>
      <Button onClick={handlePeoples} content='Pegar locais' />
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
