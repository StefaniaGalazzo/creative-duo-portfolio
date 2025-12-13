import styled, { css } from 'styled-components'

type ButtonVariant = keyof typeof variants

interface ButtonProps {
  as?: React.ElementType
  $variant?: ButtonVariant
  $padding?: string | number
  $bg?: string
  $borderRadius?: string | number
  $boxShadow?: string
  $width?: string | number
  $hoverBg?: string
}

const variants = {
  default: css`
    background-color: ${({ theme }) => theme?.colors.detail1 || 'lightgrey'};
    padding: 0.75rem 1.5rem;
    color: ${({ theme }) => theme?.colors.mainColor || 'black'};
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease;
    margin-top: auto;

    &:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
}

export const ButtonWrapper = styled.button<ButtonProps>`
  ${({ $variant }) => variants[$variant || 'default']}
`
