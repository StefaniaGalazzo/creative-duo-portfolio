import styled, { css, keyframes } from 'styled-components'
import { motion } from 'framer-motion'

// Animazione liquida con keyframes
const liquidRise = keyframes`
  0% {
    clip-path: polygon(
      0% 100%, 
      25% 100%, 
      50% 100%, 
      75% 100%, 
      100% 100%, 
      100% 100%, 
      0% 100%
    );
  }
  50% {
    clip-path: polygon(
      0% 50%, 
      25% 45%, 
      50% 40%, 
      75% 35%, 
      100% 30%, 
      100% 100%, 
      0% 100%
    );
  }
  100% {
    clip-path: polygon(
      0% 0%, 
      25% 5%, 
      50% 10%, 
      75% 15%, 
      100% 20%, 
      100% 100%, 
      0% 100%
    );
  }
`

const liquidFall = keyframes`
  0% {
    clip-path: polygon(
      0% 0%, 
      25% 5%, 
      50% 10%, 
      75% 15%, 
      100% 20%, 
      100% 100%, 
      0% 100%
    );
  }
  50% {
    clip-path: polygon(
      0% 50%, 
      25% 55%, 
      50% 60%, 
      75% 65%, 
      100% 70%, 
      100% 100%, 
      0% 100%
    );
  }
  100% {
    clip-path: polygon(
      0% 100%, 
      25% 100%, 
      50% 100%, 
      75% 100%, 
      100% 100%, 
      100% 100%, 
      0% 100%
    );
  }
`

const variants = {
  punchy: css`
    // padding: 1rem 0 1rem 1rem;
    width: 160px;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: ${({ theme }) => theme.colors.detail1};
      transform: scale(0);
      transition: transform 0.15s ease-out;
      z-index: 1;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.surface};
    }

    &:hover::after {
      transform: scale(1);
    }
  `,
  fluid: css`
    // padding: 1rem 1rem 1rem 0;
    width: 160px;
    .fluid-fill {
      position: absolute;
      inset: 0;
      z-index: 1;
    }

    .fluid-fill path {
      fill: ${({ theme }) => theme.colors.detail1};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.surface};
    }
  `,
}

export const BadgeWrapper = styled(motion.div)<{ $variant: 'punchy' | 'fluid' }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  border: 1px solid ${({ theme }) => theme.colors.detail1};

  overflow: hidden;
  cursor: pointer;
  user-select: none;

  span {
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
  }

  ${({ $variant }) => variants[$variant]}
`

export const FillLayer = styled.div<{ $variant: 'punchy' | 'fluid' }>`
  display: none;
`

// Versione alternativa con CSS puro (più performante)
export const FluidFillLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: ${({ theme }) => theme.colors.detail1};

  clip-path: polygon(0% 100%, 25% 100%, 50% 100%, 75% 100%, 100% 100%, 100% 100%, 0% 100%);

  ${BadgeWrapper}:hover & {
    animation: ${liquidRise} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  ${BadgeWrapper}:not(:hover) & {
    animation: ${liquidFall} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`
