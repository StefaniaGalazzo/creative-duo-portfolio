// styles.ts
import styled, { css } from 'styled-components'

type Props = {
  $variant?: 'home' | 'menu'
}

const socialItemVariants = {
  home: css`
    border: 1px solid ${({ theme }) => theme?.colors?.detail1};
  `,
  menu: css`
    border: 1px solid ${({ theme }) => theme?.colors?.surface};
  `,
}

const socialLinksVariants = {
  home: css`
    a {
      border: 1px solid ${({ theme }) => theme?.colors?.detail1};
    }
  `,
  menu: css`
    a {
      border: 1px solid ${({ theme }) => theme?.colors?.surface};
    }
  `,
}

export const FooterGrid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: auto;
  height: 55px;
`

export const SocialItem = styled.div<Props>`
  position: relative;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme?.colors?.surface};
  text-align: center;
  cursor: pointer;
  overflow: hidden;

  ${({ $variant }) => $variant && socialItemVariants[$variant]}
`

export const SocialLinksRow = styled.div<Props>`
  display: flex;
  justify-content: center;
  gap: 1.2rem;

  a {
    font-size: 0.9rem;
    text-decoration: none;
    color: inherit;
    opacity: 0.8;
    padding: 0.2rem 0.5rem;
    border: 1px solid ${({ theme }) => theme?.colors?.surface};
    &:hover {
      opacity: 1;
    }
  }

  ${({ $variant }) => $variant && socialLinksVariants[$variant]}
`
