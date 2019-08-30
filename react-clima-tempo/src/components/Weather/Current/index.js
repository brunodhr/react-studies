import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCurrent } from 'store/thunks/current'

const Current = () => {
  const current = useSelector(state => state.current.current)
  const loading = useSelector(state => state.current.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrent())
  }, [dispatch])

  return (
    <>
      {loading ? (
        'Carregando'
      ) : (
        <>
          {current ? (
            <>
              <h3>Condiçao</h3>
              <p>{current.data.condition}</p>
              <h3>Temperatura</h3>
              <p>{current.data.temperature}</p>
              <h3>Temperatura sentida</h3>
              <p>{current.data.temperature}</p>
              <h3>Velocidade do vento</h3>
              <p>{current.data.wind_velocity}</p>
              <h3>Direção do vento</h3>
              <p>{current.data.wind_direction}</p>
              <h3>Humidade</h3>
              <p>{current.data.humidity}</p>
              <h3>Pressão</h3>
              <p>{current.data.pressure}</p>
              <h3>Data</h3>
              <p>{current.data.date}</p>
            </>
          ) : (
            'Carregando'
          )}
        </>
      )}
    </>
  )
}

export default Current
