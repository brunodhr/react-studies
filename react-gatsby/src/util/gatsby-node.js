const QuintoAndar = require('./src/quinto-andar.json')
const path = require('path')

exports.createPages = ({ actions: { createPage } }) => {
  const ListingTemplate = path.resolve('./src/util/listing.jsx')
  QuintoAndar.listings.forEach(listing =>
    createPage({
      path: `/listings/${listing.id}`,
      component: ListingTemplate,
      context: listing,
    })
  )
}
