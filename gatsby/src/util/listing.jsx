import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'shards-react'

import ImageGallery from '../components/image-gallery'
import ListingCard from '../components/listing-card'

const Listing = ({ pageContext }) => {
  const {
    endereco,
    bairro,
    photos,
    aluguel_condominio,
    quartos,
  } = pageContext.fields

  return (
    <>
      <ImageGallery images={photos.slice(0, 3)} />
      <Container style={{ marginTop: '50px' }}>
        <ListingCard
          id={pageContext.id}
          address={endereco}
          region={bairro}
          price={aluguel_condominio}
          roomCount={parseInt(quartos)}
        />
      </Container>
    </>
  )
}
Listing.propTypes = {
  siteTitle: PropTypes.string,
}
Listing.defaultProps = {}
export default Listing
