import React from 'react'
import Counter from 'components/counter'
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
      <Counter />
      <div>Home Page</div>
      <Button onClick={handlePeoples} content="Pegar locais" />
      {places &&
        places.map((place, index) => <h1 key={index}> {place.name} </h1>)}
    </>
  )
}

export default Home
