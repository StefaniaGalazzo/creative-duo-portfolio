/* ---------- BURGER MENU ---------- */

import styled, { css } from 'styled-components'
interface BurgerProps {
  $open?: boolean
  $color?: string
  $bg?: string
}

export const BurgerWrapper = styled.div<BurgerProps>`
  width: 32px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
  z-index: 20;
  &:hover div {
    transform: scaleX(0.8);
  }
`

export const BurgerLine = styled.div<BurgerProps>`
  height: 3px;
  width: 100%;
  color: ${({ $color }) => $color || 'currentColor'};
  background-color: ${({ $bg }) => $bg ?? 'currentColor'};
  border-radius: 3px;
  transition: 0.25s ease;
  transform-origin: center;

  ${({ $open }) =>
    $open &&
    css`
      transform: scaleX(2.8);

      &:nth-child(1) {
        transform: translateY(6px);
      }

      &:nth-child(2) {
        transform: translateY(-6px);
      }
    `}
`
