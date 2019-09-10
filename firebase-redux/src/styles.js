import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
    color:#fff;
  }
  
  body {
    font-size: 14px;
  }
`

export default GlobalStyle
