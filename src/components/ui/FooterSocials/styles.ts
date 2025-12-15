// styles.ts
import styled from 'styled-components'

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: auto;
  height: 55px;
`
export const SocialItem = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme?.colors?.surface};
  text-align: center;
  cursor: pointer;
  overflow: hidden;
`

export const SocialLinksRow = styled.div`
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
`
