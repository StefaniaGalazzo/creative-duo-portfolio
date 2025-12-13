import styled from 'styled-components'

interface MenuStyleProps {
  $bg?: string
  $color?: string
  $borderColor?: string
}

export const MainMenuWrapper = styled.div<MenuStyleProps>`
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  background: var(--surface-color, #111);
  color: var(--text-color, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${({ $bg, theme }) => $bg ?? theme?.colors?.detail1 ?? '#111'};
  color: ${({ $color, theme }) => $color ?? theme?.colors?.surface ?? '#fff'};
`

export const MenuLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  a {
    padding: 4rem 2rem;
    border-bottom: 1px solid wheat;
    padding: 2rem;
    font-size: 2.2rem;
    text-transform: lowercase;
    text-decoration: none;
    color: inherit;
  }
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: auto;
  a {
    padding: 1rem;
    border: 1px solid white;
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
  }
`
