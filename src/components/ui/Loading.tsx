import React from 'react'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: ${(theme) => theme?.colors?.mainBg || '#f0f0f0'};
`

const Dot = styled.div<{ $delay: string }>`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: ${(theme) => theme?.colors?.detail2 || '#3498db'};
  opacity: 0.4;
  animation: ${(theme) => theme?.tokens?.animations?.bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${({ $delay }) => $delay};
  &.active {
    background-color: ${(theme) => theme?.colors?.accent2};
  }
`

const Loading: React.FC = () => {
  return (
    <LoaderWrapper>
      <Dot $delay='0s' />
      <Dot $delay='0.2s' />
      <Dot $delay='0.4s' />
    </LoaderWrapper>
  )
}

export default Loading
