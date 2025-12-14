import styled, { css, keyframes } from 'styled-components'

export const CursorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const cursorPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`

const BaseCursorBall = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
`

export const CursorBallBig = styled(BaseCursorBall)<{ $isHovered?: boolean }>`
  width: 30px;
  height: 30px;
  mix-blend-mode: difference;
`

export const CursorBallSmall = styled(BaseCursorBall)`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.detail1};
`

export const CursorInner = styled.div<{ $isHovered?: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.accent2};
  transform: scale(1);
  transition: transform 0.28s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;

  /* Effetto hover su .hoverable e elementi interattivi */
  ${({ $isHovered }) =>
    $isHovered &&
    css`
      transform: scale(4) !important;
      animation: ${cursorPulse} 1.5s ease-in-out infinite;
    `}
`
