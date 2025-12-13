import styled, { css } from 'styled-components'

// Container per lo scroll orizzontale
export const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  /* Nascondi scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const variants = {
  default: css<{ $bg?: string }>`
    display: flex;
    align-items: center;
    padding: 5rem 2rem;
    gap: 2rem;
    text-align: ${({ $textAlign }) => $textAlign || 'lefts'};
    justify-content: end;
    z-index: 100;
    overflow: hidden;
    border-top: 1px solid ${({ theme }) => theme?.colors?.detail1 || '#fff'};
    width: 100%;
    flex-shrink: 0;

    /* Transizione per l'hover */
    transition: all 0.3s ease;

    /* Effetto hover */
    // &:hover {
    //   border-top-color: ${({ theme }) => theme?.colors?.accent3 || '#ffaccfff'};
    //   transform: translateY(-10px) scale(1.02);
    //   box-shadow: 0 10px 30px rgba(255, 172, 207, 0.2);
    // }
  `,
}

type SliderWrapperProps = {
  $height?: string
  $variant?: keyof typeof variants
  $textAlign?: string
  $bg?: string
}

export const SliderWrapper = styled.section<SliderWrapperProps>`
  ${({ $variant }) => variants[$variant || 'default']}
`
