import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
 :root {
  --background: #121212; 
   --text-title: #ffffff;
   --text: #BB86FC;
   --green: #03DAC5;
 }
 
  * { 
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
  body {
    background: #272727;
    -webkit-font-smoothing: antialiased;
  }

  html {
      @media (max-width: 1080px){
        font-size: 93.75%; //15px
      }
      @media (max-width: 720px) {
        font-size: 87.5%; //14px
      }
    }
  button {
    cursor: pointer;
  }

  body, input, textarea, button {
  font-family: "Poppins", sans-serif;
	font-weight: 400; 
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600; 
}
`
