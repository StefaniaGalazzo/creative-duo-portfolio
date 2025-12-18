import styled from 'styled-components'

export const Frame = styled.div`
  position: relative;
  height: 100%;
  color: ${({ theme }) => theme?.colors?.mainColor || '#000'};
  border: 2px solid;
  border-radius: 4px;
  padding: 16px;

  box-shadow: 4px 4px 0 #000;

  background: #0000002f;
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);

  transform-style: preserve-3d;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: perspective(1100px) rotateX(2deg) rotateY(-2deg) translate(-2px, -2px);
    box-shadow: 10px 10px 0 #000;
  }
`

export const Inner = styled.div`
  position: relative;
  width: 100%;
  border: 2px solid #000;
  border-radius: 4px;
  margin-top: 42px;
  padding: 2rem 2rem 5rem 2rem;
`

export const TopBar = styled.div`
  position: absolute;
  top: 10px;
  left: 16px;
  right: 16px;
  height: 40px;
`

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  z-index: 3;
  border-radius: 50%;
  border: 2px solid #000;
  position: relative;
  background: #e9f8fd;
  &::after {
    content: '';
    border-radius: 50%;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    border: 1px solid #000;
    position: absolute;
  }
`

export const Pill = styled.div<{
  $w?: string
  $h?: string
  $radius?: string
  $justify?: string
  $bg?: string
  shadow?: boolean
}>`
  height: ${({ $h }) => $h || '50px'};
  width: ${({ $w }) => $w || 'auto'};
  padding: 0.5rem;
  border-radius: ${({ $radius }) => $radius || '999px'};
  border: 2px solid #000;
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: ${({ $justify }) => $justify || 'center'};
  align-items: center;
  gap: 0.5rem;
  background: ${({ $bg }) => $bg || '#e9f8fd'};
  ${({ shadow }) =>
    shadow &&
    `
      box-shadow: 2px 0 0 #000;
      &:hover {
        box-shadow: 4px 0 0 #000;
        transition: all 0.1s ease-in-out;
        transform:  scale(1.3);
      }
    `}
`

export const LeafIcon = styled.div<{ $bg?: string; shadow?: boolean }>`
  width: 42px;
  height: 42px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  box-shadow: 2px 0 0 #000;
  justify-content: center;
  font-size: 22px;
  background: ${({ $bg }) => $bg || 'transparent'};

  ${({ shadow }) =>
    shadow &&
    `
      box-shadow: 2px 0 0 #000;
      &:hover {
        box-shadow: 4px 0 0 #000;
        transition: all 0.1s ease-in-out;
        transform:  scale(1.3);
        transform: scale(1.3);
        box-shadow: 4px 0 0 #000;
        background: ${({ $bg }) => $bg || ' #ffffff47'};
        transition: all 0.1s ease-in-out;
    `}
`

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const BottomBar = styled.div`
  position: absolute;
  bottom: -2px;
  left: 10px;
  right: -2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
