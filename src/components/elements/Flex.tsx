import styled, { css } from 'styled-components'

type FlexProps = {
  $bg?: string
  $margin?: string
  $direction?: string | 'row' | 'column'
  flex?: string
  h?: string | number
  $w?: string | number
  $maxWidth?: string | number
  $textAlign?: string
  $wrap: string | 'nowrap' | 'wrap' | 'wrap-reverse'
  $gridTemplateColumns?: string
  $height?: string | number
  $width?: string | number
  $color?: string
  $alignItems?:
    | string
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
  $justifyContent?: string | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  $boxShadow?: string
  $fontFamily?: string
  $radius?: string | number
  $gap?: string | number
  $display?: string
  $userSelect?: string
  $borderRadius?: string | number
  $position?: string
  full?: boolean | string
  $p?: string | number // CSS generic padding same value top, right, bottom, left
  $padding?: string // CSS padding value top, right, bottom, left
  $zIndex?: string | number
  $overflow?: string
  $transition?: string
} & React.HTMLAttributes<HTMLDivElement>

const FlexWrap = styled.div<FlexProps>`
  position: ${({ $position }) => $position || 'relative'};
  width: ${({ $width, $w }) => $width || $w || 'auto'};
  max-width: ${({ $maxWidth }) => $maxWidth || undefined};
  height: ${({ $height }) => $height || undefined};
  overflow: ${({ $overflow }) => $overflow || 'visible'};
  transition: ${({ $transition }) => $transition || 'none'};
  z-index: ${({ $zIndex }) => $zIndex || 'auto'};
  display: ${({ $display }) => $display || 'flex'};
  grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns || undefined};
  flex-direction: ${({ $direction }) => $direction || 'row'};
  flex: ${({ flex }) => flex || undefined};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
  align-items: ${({ $alignItems }) => $alignItems || 'stretch'};
  flex-wrap: ${({ $wrap = 'nowrap' }) => $wrap};
  border-radius: ${({ $radius, $borderRadius }) => ($radius ? `${$radius}rem` : $borderRadius || undefined)};
  box-shadow: ${({ $boxShadow }) => $boxShadow || 'none'};
  gap: ${({ $gap }) => ($gap ? `${$gap}` : undefined)};
  background: ${({ $bg }) => ($bg ? `${$bg}` : undefined)};
  padding: ${({ $padding }) => $padding || undefined};
  textalign: ${({ $textAlign }) => $textAlign || undefined};
  color: ${({ $color }) => $color || undefined};'};
  user-select: ${({ $userSelect }) => $userSelect || 'auto'};
  font-family:${({ $fontFamily }) => $fontFamily || undefined};
  margin:${({ $margin }) => $margin || undefined}
  ${({ full }) =>
    full &&
    css`
      width: 100%;
      height: 100%;
    `}
`
export function Flex({ children, ...props }: FlexProps) {
  return <FlexWrap {...props}>{children}</FlexWrap>
}
