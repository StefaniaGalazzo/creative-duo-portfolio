import styled, { css } from 'styled-components'

// Container per catturare lo scroll verticale
export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`

const variants = {
  default: css<{ $bg?: string }>`
    display: flex;
    align-items: center;
    padding: 8rem 2rem;
    gap: 2rem;
    text-align: ${({ $textAlign }) => $textAlign || 'left'};
    justify-content: end;
    z-index: 100;
    border-top: 1px solid ${({ theme }) => theme?.colors?.detail1 || '#fff'};
    width: 100vw;
    min-width: 100vw;
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
