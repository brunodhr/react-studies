import PropTypes from 'prop-types'
import React from 'react'
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardBody,
  Button,
} from 'shards-react'

import StyledLink from './styled-link'

const IMG_PREFIX = 'https://www.quintoandar.com.br/img/xxl/'

const formatRoomCount = roomCount =>
  roomCount ? `${roomCount} quarto${roomCount > 1 ? 's' : ''}` : ' '

const ListingCard = ({ id, address, region, roomCount, price, imageId }) => (
  <Card>
    {imageId && (
      <CardImg
        src={`${IMG_PREFIX}${imageId}`}
        style={{ width: '100%', height: 'auto' }}
      />
    )}
    <CardBody>
      <CardTitle
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {address}
      </CardTitle>
      <CardSubtitle>{region}</CardSubtitle>
      <p>{formatRoomCount(roomCount)}</p>
      <Button tag="div">
        <StyledLink to={`/listings/${id}`}>R$ {parseInt(price)}</StyledLink>
      </Button>
    </CardBody>
  </Card>
)

ListingCard.propTypes = {
  id: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roomCount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  imageId: PropTypes.string,
}

ListingCard.defaultProps = {}

export default ListingCard
