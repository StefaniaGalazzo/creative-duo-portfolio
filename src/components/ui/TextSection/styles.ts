import styled, { css } from 'styled-components'

/* ---------- TXTSECTION WRAPPER ---------- */

type TxtSectionWrapperProps = {
  $height?: string
  $variant?: keyof typeof variants
  $textAlign?: string
  $bg?: string
}

const variants = {
  default: css<TxtSectionWrapperProps>`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    gap: 1rem;
    text-align: ${({ $textAlign }) => $textAlign || 'left'};
    padding: 8rem 5.5rem;
    border-bottom: 1px solid ${({ theme }) => theme?.colors?.detail1 || '#fff'};
    border-top: 1px solid ${({ theme }) => theme?.colors?.detail1 || '#fff'};
    width: 100%;
    color: ${({ theme }) => theme?.colors?.detail1 || 'blue'};
  `,
}

export const TxtSectionWrapper = styled.section<TxtSectionWrapperProps>`
  ${({ $variant }) => variants[$variant || 'default']}
`
