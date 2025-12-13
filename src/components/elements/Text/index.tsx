// src/components/ui/Text/index.tsx
import React from 'react'
import { TextWrap } from './styled'

type TextProps = React.ComponentProps<typeof TextWrap> & {
  as?: React.ElementType
  children: React.ReactNode | string
}

export function Text({ as, children, ...props }: TextProps) {
  return (
    <TextWrap as={as} {...props}>
      {children}
    </TextWrap>
  )
}
