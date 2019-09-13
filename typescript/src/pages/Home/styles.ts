import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 133px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #505050;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    height: calc(100vh - 130px);
  }
`
