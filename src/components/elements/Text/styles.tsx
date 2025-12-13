import styled, { css } from 'styled-components'

interface TextWrapProps {
  as?: React.ElementType

  // Typography
  $fontFamily?: string
  $fontWeight?: string | number
  $fontSize?: string
  $lineHeight?: string | number
  $textDecoration?: string
  $textTransform?: string
  $textOverflow?: string
  $whiteSpace?: string

  // Layout
  $w?: string | number
  $width?: string | number
  $h?: string | number
  $height?: string | number
  $display?: string
  $position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'

  // Positioning
  $top?: string | number
  $right?: string | number
  $bottom?: string | number
  $left?: string | number

  // Flexbox/Grid
  $gap?: string | number
  $direction?: string
  $alignItems?: string
  $justifyContent?: string
  $alignSelf?: string
  $justifySelf?: string

  // Color & Effects
  $color?: string
  $bg?: string
  $opacity?: string | number

  // Gradient Text
  $gradient?: string
  $gradientClip?: boolean

  //interactions
  $userSelect?: string

  // Spacing
  $m?: string | number
  $margin?: string | number
  $p?: string | number
  $padding?: string | number

  // Text alignment
  $align?: 'left' | 'center' | 'right' | 'justify'

  // Overflow
  $overflow?: string

  // Z-index
  $zIndex?: string | number
}

export const TextWrap = styled.p<TextWrapProps>`
  ${({
    theme,

    // Typography
    $fontWeight,
    $fontSize,
    $fontFamily,
    $lineHeight,
    $textDecoration,
    $textTransform,
    $textOverflow,
    $whiteSpace,

    // Layout
    $width,
    $w,
    $height,
    $h,
    $display,
    $position,

    // Positioning
    $top,
    $right,
    $bottom,
    $left,

    // Flexbox/Grid
    $direction,
    $alignItems,
    $justifyContent,
    $alignSelf,
    $justifySelf,
    $gap,

    //interactions
    $userSelect,

    // Color & Effects
    $color,
    $bg,
    $opacity,
    $gradient,
    $gradientClip,

    // Spacing
    $m,
    $margin,
    $p,
    $padding,

    // Text alignment
    $align,

    // Overflow
    $overflow,

    // Z-index
    $zIndex,
  }: TextWrapProps) => css`
    /* Typography */
    font-family: ${$fontFamily || undefined};
    font-weight: ${$fontWeight || undefined};
    font-size: ${$fontSize || undefined};
    line-height: ${$lineHeight || '1.15'};
    text-decoration: ${$textDecoration || undefined};
    text-transform: ${$textTransform || undefined};
    text-overflow: ${$textOverflow || undefined};
    white-space: ${$whiteSpace || undefined};
    text-align: ${$align || undefined};

    /* Layout */
    width: ${$width ?? $w ?? 'auto'};
    height: ${$height ?? $h ?? 'auto'};
    display: ${$display || undefined};
    position: ${$position || undefined};

    /* Flex defaults (ex TextWrapper) */
    flex-direction: ${$direction || undefined};
    align-items: ${$alignItems || undefined};
    justify-content: ${$justifyContent || 'center'};
    gap: ${$gap || undefined};

    /* Interactions */
    user-select: ${$userSelect || undefined};

    /* Positioning */
    top: ${$top || undefined};
    right: ${$right || undefined};
    bottom: ${$bottom || undefined};
    left: ${$left || undefined};

    /* Alignment */
    align-self: ${$alignSelf || undefined};
    justify-self: ${$justifySelf || undefined};

    /* Color & Effects */
    color: ${$gradient && $gradientClip ? 'transparent' : $color || undefined};
    background-color: ${$bg || undefined};
    opacity: ${$opacity || undefined};

    /* Gradient Text */
    ${$gradient &&
    css`
      background: ${$gradient};
      ${$gradientClip &&
      css`
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      `}
    `}

    /* Spacing */
    margin: ${$margin ?? $m ?? undefined};
    padding: ${$padding ?? $p ?? undefined};

    /* Overflow */
    overflow: ${$overflow || 'hidden'};

    /* Z-index */
    z-index: ${$zIndex || undefined};
  `}
`
