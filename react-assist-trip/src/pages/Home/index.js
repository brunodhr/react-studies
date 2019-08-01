import React from 'react'

import Button from 'components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { getPlaces } from 'store/thunks/places'
// import { Container } from './styles';

const Home = () => {
  const places = useSelector(state => state.places.places)
  const dispatch = useDispatch()
      id: 1,
      name: 'teste'
    },
    {
      id: 2,
      name: 'teste'
    },
    {
      id: 3,
      name: 'teste'
    }
  ])

  const handlePeoples = async event => {
    event.preventDefault()

    dispatch(getPlaces())
  }
  return (
    <>
      <div>Home Page</div>
      <Button onClick={handlePeoples} content='Pegar locais' />
      {places &&
        places.map((place, index) => <h1 key={index}> {place.name} </h1>)}
    </>
  )
}

export default Home
