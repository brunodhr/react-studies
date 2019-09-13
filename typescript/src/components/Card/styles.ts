import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 10px;
  width: 25%;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 50%;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    width: 33%;
  }
`
export const Container = styled.div`
  padding: 10px;
  background-color: black;
  height: 150px;
`
