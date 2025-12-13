import styled from 'styled-components'

// ------------- HERO WRAPPER -------------- //
type HeroWrapperProps = {
  $height?: string
  $textAlign?: string
  $bg?: string
}

export const HeroWrapper = styled.div<HeroWrapperProps>`
  display: grid;
  width: 100%;
  height: ${({ $height }) => $height || '100vh'};
  grid-template-columns: 5% 90% 5%;
  background-color: ${({ $bg, theme }) => $bg || theme?.colors?.surface};
  align-items: center;
  justify-content: center;
  text-align: ${({ $textAlign }) => $textAlign || 'center'};
`

// // ------------- TEXT WRAPPER -------------- //
// type TextWrapperProps = {
//   $height?: string
//   $textAlign?: string
//   $bg?: string
// }

// export const TextWrapper = styled.div<TextWrapperProps>`
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;
//   height: ${({ $height }) => $height || 'auto'};
//   background-color: ${({ $bg, theme }) => $bg || theme?.colors?.surface};
//   color: ${({ theme }) => theme?.colors?.detail3};
//   overflow: hidden;
//   text-align: ${({ $textAlign }) => $textAlign || 'center'};
// `
