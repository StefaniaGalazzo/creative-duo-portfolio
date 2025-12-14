import styled, { css } from 'styled-components'

/* ---------- NAV WRAPPER ---------- */

const variants = {
  default: css<{ $bg?: string }>`
    position: sticky;
    top: 0;
    left: 0;
    padding: 0.8rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme?.colors?.detail1 || '#fff'};
    width: 100%;
    background-color: ${({ $bg, theme }) => $bg || theme?.colors?.surface};
    color: ${({ theme }) => theme?.colors?.detail1 || 'blue'};
  `,
  glass: css<{ $bg?: string }>`
    position: sticky;
    top: 0;
    left: 0;
    padding: 0.8rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme?.colors?.detail1 || '#fff'};
    width: 100%;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(7.2px);
    -webkit-backdrop-filter: blur(7.2px);

    color: ${({ theme }) => theme?.colors?.detail1 || 'blue'};
  `,
}

type NavWrapperProps = {
  $height?: string
  $variant?: keyof typeof variants
  $textAlign?: string
  $bg?: string
}

export const NavWrapper = styled.header<NavWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 100;
  text-align: ${({ $textAlign }) => $textAlign || 'center'};

  ${({ $variant }) => variants[$variant || 'default']}
`
