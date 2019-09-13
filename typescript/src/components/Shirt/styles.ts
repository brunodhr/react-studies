import styled, { keyframes } from 'styled-components'

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`

export const Sample = styled.svg`
  fill: #505050;
  height: 100%;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation-name: ${FadeInAnimation};
  display: block;
  //to do: make responsive
  @media (min-width: 320px) and (max-width: 425px) {
    display: none;
  }
`
