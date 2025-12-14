// src/theme/globalStyles.ts
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }




  :root {
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // animated background gradient
    --color-bg1: rgb(108, 0, 162);
    --color-bg2: rgb(0, 17, 82);
    --color1: 18, 113, 255;
    --color2: 221, 74, 255;
    --color3: 100, 220, 255;
    --color4: 200, 50, 50;
    --color5: 180, 180, 50;
    --color-interactive: 140, 100, 255;
    --circle-size: 80%;
    --blending: hard-light;
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
    grid-template-columns: auto 1400px auto;
  }

  h1, h2, h3, h4, h5, h6, p, span,  {
    margin: 0;        
    padding: 0;
    line-height: normal;
  }

  h1, h2, h3  {
    font-family: ${({ theme }) => theme?.tokens?.fonts?.headerLight};
    line-height: 1;
  }

  h4, h5, h6, p, a, button  {
    font-family: ${({ theme }) => theme?.tokens?.fonts?.paragraph};
  }
  
  a, button {
    text-decoration: none;
    cursor: pointer;
    border: none;
    color: unset;
  }

  // --------  animated background gradient  ---------------------

    @keyframes moveInCircle {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes moveVertical {
    0% { transform: translateY(-50%); }
    50% { transform: translateY(50%); }
    100% { transform: translateY(-50%); }
  }

  @keyframes moveHorizontal {
    0% { transform: translateX(-50%) translateY(-10%); }
    50% { transform: translateX(50%) translateY(10%); }
    100% { transform: translateX(-50%) translateY(-10%); }
  }

 `
