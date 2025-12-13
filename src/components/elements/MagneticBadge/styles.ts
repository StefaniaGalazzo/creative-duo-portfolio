import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  punchy: css`
    padding: 1rem 0 1rem 1rem;
    &::after {
      transition: transform 0.09s ease-out;
      //   border-radius: 100px;
      transform-origin: center;
    }

    &:hover::after {
      transform: scale(1);
    }
  `,
  fluid: css`
    padding: 1rem 1rem 1rem 0;

    &::after {
      transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      //   border-radius: 100px;
      transform-origin: bottom;
    }

    &:hover::after {
      transform: scaleY(1);
    }
  `,
}

export const BadgeWrapper = styled(motion.div)<{ $variant: 'punchy' | 'fluid' }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  //   border-radius: 100px;
  aspect-ratio: 1/1;
  border: 1px solid ${({ theme }) => theme.colors.detail1};

  overflow: hidden;
  cursor: pointer;
  user-select: none;

  span {
    position: relative;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.colors.detail1};
    transform: ${({ $variant }) => ($variant === 'punchy' ? 'scale(0)' : 'scaleY(0)')};
    z-index: 1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.surface};
  }

  ${({ $variant }) => variants[$variant]}
`

export const FillLayer = styled.div<{ $variant: 'punchy' | 'fluid' }>`
  display: none;
`
