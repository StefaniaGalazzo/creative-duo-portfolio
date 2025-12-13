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
`
