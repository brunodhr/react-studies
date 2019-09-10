import styled from 'styled-components'

export const Menu = styled.div`
  background-color: #505050;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
  }
`

export const Logo = styled.svg`
  width: 80px;
  height: 80px;
  fill: rgb(97, 219, 251);
  transition: 0.3s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`

export const Link = styled.a``
