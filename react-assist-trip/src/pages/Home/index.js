import React, { useState } from 'react'

import API from 'utils/api'
import Button from 'components/Button'
// import { Container } from './styles';

const Home = () => {
  const [places, setPlaces] = useState([
    {
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
  const axiosConfig = {
    headers: {
      accept: 'application/json',
      authorization: 'Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV'
    }
  }

  const handlePeoples = async event => {
    event.preventDefault()

    const response = await API.get('base/destinations', axiosConfig)
    setPlaces(response.data)
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
