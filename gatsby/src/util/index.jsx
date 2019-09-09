import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'shards-react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ListingCard from '../components/listing-card'

import QuintoAndar from '../quinto-andar.json'
import Filters from '../components/filters'

const IndexPage = () => {
  const { listings } = QuintoAndar
  const [roomCount, setRoomCount] = useState(1)
  const filteredListings = listings.filter(
    listing => parseInt(listing.fields.quartos) >= roomCount
  )

  return (
    <Layout>
      <SEO title="Home" />
      <Filters roomCount={roomCount} setRoomCount={setRoomCount} />
      <Container fluid>
        <Row>
          {filteredListings.map(listing => (
            <Col
              key={listing.id}
              style={{ marginTop: '30px' }}
              xs={12}
              md={6}
              lg={4}
              xl={3}
            >
              <ListingCard
                id={listing.id}
                address={listing.fields.endereco}
                region={listing.fields.bairro}
                imageId={listing.fields.photos[0]}
                price={listing.fields.aluguel_condominio}
                roomCount={parseInt(listing.fields.quartos)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
