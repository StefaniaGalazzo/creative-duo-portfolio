import styled, { keyframes } from 'styled-components'

export const CursorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

// Base per entrambi i cursori
export const CursorBall = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
`

export const CursorInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent1};
  transition: transform 0.28s cubic-bezier(0.23, 1, 0.32, 1);
  transform: scale(1);
`
/* Pulsazione soft per effetto luce */
const cursorPulse = keyframes`
  0%, 10%, 30%, 60%, 100% {
    transform: scale(2);
  }
  20%, 90% {
    transform: scale(2.12);
  }
  20%, 80% {
    transform: scale(2.3);
  }
`

export const CursorBallBig = styled(CursorBall)`
  width: 30px;
  height: 30px;
  mix-blend-mode: difference;

  /* Hover normale */
  &.cursor-hover ${CursorInner} {
    transform: scale(4);
  }

  /* Effetto luce CTA */
  &.cursor-light ${CursorInner} {
    background: ${({ theme }) => theme.colors.accent3};
    transform: scale(8);
    filter: blur(6px);
    opacity: 0.8;
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.3s ease-out;
    animation: ${cursorPulse} 1s ease-in-out infinite;
  }
`

export const CursorBallSmall = styled(CursorBall)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.detail1};
  background: 1px solid ${({ theme }) => theme.colors.accent3};
`
