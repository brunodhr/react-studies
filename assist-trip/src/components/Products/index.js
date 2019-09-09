import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from 'store/thunks/products'

// import { Container } from './styles';

const Products = () => {
  const products = useSelector(state => state.products.products)
  const loading = useSelector(state => state.products.loading)

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
              <>
                <h1 key={index}>{product.name}</h1>
                <h3>Coverages:</h3>
                <ul>
                  {product.coverages.map((coverage, index) => (
                    <li key={index}>{coverage.display_name_ptbr}</li>
                  ))}
                </ul>
              </>
            ))}
        </div>
      )}
    </>
  )
}

export default Products
