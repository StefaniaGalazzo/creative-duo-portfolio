// src/theme/globalStyles.ts
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    cursor: none !important; /* Nasconde il cursore di default */
  }

  :root {
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, :root, #root {
    width: 100%;
  
    margin: 0;
    padding: 0;
    height: 100vh;

    font-family: 'Migra-Extralight', serif;

    font-weight: 400;
    line-height: 1.2;
    color: ${({ theme }) => theme?.colors?.text || 'blue'};
    transition: background 0.3s ease, color 0.3s ease;
    font-family: ${({ theme }) => theme?.tokens?.fonts?.paragraph};
  }
    
  main{
    display: grid;
    grid-template-columns: 5% 90% 5%;
  }

  h1, h2, h3, h4, h5, h6, p, span,  {
    margin: 0;        
    padding: 0;
    line-height: normal;
  }

  h1, h2, h3  {
    font-family: ${({ theme }) => theme?.tokens?.fonts?.headingLight};
    line-height: 1;
  }

  h4, h5, h6, p, span, a, button  {
    font-family: ${({ theme }) => theme?.tokens?.fonts?.paragraph};
  }
  
  a, button {
    text-decoration: none;
    cursor: pointer;
    border: none;
    color: unset;
  }


 `
// // Applica le variabili dal tema
// :root {
//   ${({ theme }) =>
//     Object.entries(theme)
//       .map(([key, value]) => `${key}: ${value};`)
//       .join('\n')}
// }
