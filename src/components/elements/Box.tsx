import styled from 'styled-components'

interface BoxProps {
  $p?: string | number
  $m?: string | number
  $bg?: string
  $position?: string
  $width?: string | number
  $w?: string | number
  $h?: string | number
  $height?: string | number
  $display?: string
  $placeContent?: string
  $gridTemplateColumns?: string
  $gridTemplateRows?: string

  // BORDER
  $border?: string | number
  $borderTop?: string | number
  $borderRight?: string | number
  $borderBottom?: string | number
  $borderLeft?: string | number

  $borderWidth?: string | number
  $borderStyle?: string
  $borderColor?: string

  $borderRadius?: string | number
  $borderTopLeftRadius?: string | number
  $borderTopRightRadius?: string | number
  $borderBottomLeftRadius?: string | number
  $borderBottomRightRadius?: string | number

  // OUTLINE
  $outline?: string
  $outlineWidth?: string | number
  $outlineStyle?: string
  $outlineColor?: string
  $outlineOffset?: string | number

  $boxShadow?: string
  $overflow?: string
  $zIndex?: string | number
  $cursor?: string
  $transition?: string
  $opacity?: string | number
  $fontWeight?: string | number
}

export const Box = styled.div<BoxProps>`
  padding: ${({ $p }) => $p ?? undefined};
  margin: ${({ $m }) => $m ?? undefined};
  background: ${({ $bg, theme }) => $bg ?? theme?.colors?.background ?? 'transparent'};
  position: ${({ $position }) => $position ?? 'relative'};
  width: ${({ $width, $w }) => $width || $w || 'auto'};
  height: ${({ $height, $h }) => $height || $h || 'auto'};
  display: ${({ $display }) => $display || 'block'};
  overflow: ${({ $overflow }) => $overflow || 'visible'};
  z-index: ${({ $zIndex }) => $zIndex || 'auto'};
  cursor: ${({ $cursor }) => $cursor || 'auto'};
  transition: ${({ $transition }) => $transition || 'none'};
  opacity: ${({ $opacity }) => $opacity ?? 1};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'normal'};

  grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns || undefined};
  grid-template-rows: ${({ $gridTemplateRows }) => $gridTemplateRows || undefined};
  place-content: ${({ $placeContent }) => $placeContent || undefined};

  /* BORDER shorthand */
  border: ${({ $border }) => $border ?? undefined};

  /* BORDER sides */
  border-top: ${({ $borderTop }) => $borderTop ?? undefined};
  border-right: ${({ $borderRight }) => $borderRight ?? undefined};
  border-bottom: ${({ $borderBottom }) => $borderBottom ?? undefined};
  border-left: ${({ $borderLeft }) => $borderLeft ?? undefined};

  /* BORDER details */
  border-width: ${({ $borderWidth }) => $borderWidth ?? undefined};
  border-style: ${({ $borderStyle }) => $borderStyle ?? undefined};
  border-color: ${({ $borderColor }) => $borderColor ?? undefined};

  /* BORDER radius */
  border-radius: ${({ $borderRadius }) => $borderRadius ?? undefined};
  border-top-left-radius: ${({ $borderTopLeftRadius }) => $borderTopLeftRadius ?? undefined};
  border-top-right-radius: ${({ $borderTopRightRadius }) => $borderTopRightRadius ?? undefined};
  border-bottom-left-radius: ${({ $borderBottomLeftRadius }) => $borderBottomLeftRadius ?? undefined};
  border-bottom-right-radius: ${({ $borderBottomRightRadius }) => $borderBottomRightRadius ?? undefined};

  /* OUTLINE details */
  outline-width: ${({ $outlineWidth }) => $outlineWidth ?? undefined};
  outline-style: ${({ $outlineStyle }) => $outlineStyle ?? undefined};
  outline-color: ${({ $outlineColor }) => $outlineColor ?? undefined};
  outline-offset: ${({ $outlineOffset }) => $outlineOffset ?? undefined};

  box-shadow: ${({ $boxShadow }) => $boxShadow || 'none'};
`
