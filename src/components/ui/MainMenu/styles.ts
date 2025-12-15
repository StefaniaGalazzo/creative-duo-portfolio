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
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${({ theme }) => theme?.colors?.detail1 || '#111'};
  color: ${({ $color, theme }) => $color ?? theme?.colors?.surface ?? '#fff'};
`

export const MenuLinks = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  a {
    font-family: ${({ theme }) => theme?.tokens?.fonts?.headerLight ?? '#111'};
    padding: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme?.colors?.surface || '#111'};
    font-size: 8.2rem;
  }
`
