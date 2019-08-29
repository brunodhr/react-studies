import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getLocale } from 'store/thunks/locale'

const Locale = () => {
  const locale = useSelector(state => state.locale.locale)
  const loading = useSelector(state => state.locale.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocale())
  }, [dispatch])

  return (
    <>
      {loading ? (
        'Carregando'
      ) : (
        <>
          <h1>{locale.name}</h1>
          <h2>
            {locale.state}/{locale.country}
          </h2>
        </>
      )}
    </>
  )
}

export default Locale
