import styled from 'styled-components'

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  objectFit?: 'cover' | 'contain'
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  top?: string | number
  $aspectRatio?: string
  bottom?: string | number
  $overflow?: string
  left?: string | number
  right?: string | number
}

const StyledImg = styled.img<ImgProps>`
  width: ${({ width }) => (width ? `${width}` : 'auto')};
  height: ${({ height }) => (height ? `${height}` : 'auto')};
  object-fit: ${({ objectFit }) => objectFit || 'contain'};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || undefined};
  ${({ position }) => position && `position: ${position};`}
  ${({ $overflow }) => $overflow && `overflow: ${$overflow};`}
  ${({ top }) => top && `top: ${top ? `${top}` : top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom ? `${bottom}` : undefined};`}
  ${({ left }) => left && `left: ${left ? `${left}` : undefined};`}
  ${({ right }) => right && `right: ${right ? `${right}` : undefined};`}
`

export function Image({ ...props }: ImgProps) {
  return <StyledImg {...props} />
}
