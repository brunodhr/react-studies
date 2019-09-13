import styled from 'styled-components'

export const Menu = styled.div`
  min-height: 50px;
  background-color: #505050;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
  }
`

export const Link = styled.a``
