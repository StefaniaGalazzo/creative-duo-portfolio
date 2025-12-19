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
    flex-wrap: wrap;
    padding: 8rem 2rem;
    gap: 3rem;
    text-align: ${({ $textAlign }) => $textAlign || 'left'};
    justify-content: center;
    z-index: 100;
    border-top: 1px solid ${({ theme }) => theme?.colors?.detail1 || '#fff'};
    width: 100vw;
    // min-width: 100vw;
    flex-shrink: 0;
    transition: all 0.3s ease;

    img {
      height: 300px;
    }
    .proj-txt-container {
      width: 50%;
    }
    .proj-title {
      font-size: 3.2rem;
    }

    // -----RESPONSIVE ---- //
    @media (max-width: 768px) {
      img {
        height: 250px;
      }
      .proj-title {
        font-size: 2.8rem;
      }
    }
    @media (max-width: 540px) {
      .proj-title {
        font-size: 2.8rem;
      }
    }
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
