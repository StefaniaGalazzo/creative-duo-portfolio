import styled from 'styled-components'

// ------------- HERO WRAPPER -------------- //
type HeroWrapperProps = {
  $height?: string
  $textAlign?: string
  $bg?: string
  $position?: string
  $color?: string
}

export const HeroWrapper = styled.div<HeroWrapperProps>`
  display: flex;
  position: ${({ $position }) => $position || undefined};
  width: 100%;
  color: ${({ $color }) => $color || undefined};
  height: ${({ $height }) => $height || undefined};
  background-color: ${({ $bg, theme }) => $bg || theme?.colors?.surface};
  align-items: center;
  justify-content: center;
  text-align: ${({ $textAlign }) => $textAlign || 'center'};

  .name {
    font-size: 8rem;
  }

  // ------ MEDIA QUERY ------//
  /* Desktop */
  @media (max-width: 1440px) {
    .name {
      font-size: 8rem;
    }
  }

  /* Laptop */
  @media (max-width: 1024px) {
    .name {
      font-size: 5rem;
    }
  }

  /* Tablet */
  @media (max-width: 768px) {
    .name {
      font-size: 4rem;
    }
  }

  // /* Mobile */
  // @media (max-width: 480px) {
  //   .name {
  //     font-size: 5rem;
  //   }
  // }
`
