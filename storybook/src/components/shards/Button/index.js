import React from 'react'
import { Button } from 'shards-react'

const ShardsButton = ({ theme, children }) => (
  <>
    <Button theme={theme}>{children}</Button>
  </>
)

export default ShardsButton
