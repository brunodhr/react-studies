import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from 'store/thunks/products'

// import { Container } from './styles';

const Products = () => {
  const products = useSelector(state => state.products.products)
  const loading = useSelector(state => state.places.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      {loading ? (
        'Carregando'
      ) : (
        <div>
          {products &&
            products.map((product, index) => (
              <span key={index} value={product.name}>
                {product.name}
              </span>
            ))}
        </div>
      )}
    </>
  )
}

export default Products
