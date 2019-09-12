import styled from 'styled-components'

export const Container = styled.div`
  background-color: #505050;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`

export const Menu = styled.div`
  min-height: 100px;
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
