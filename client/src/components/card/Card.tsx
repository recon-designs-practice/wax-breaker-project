import React from 'react'
import styled from '@emotion/styled'

type Props = {
  children?: React.ReactNode,
  classname?: string
  style?: any
}

const CardContainer = styled.div<Props>`
  padding: 12px;
  border: 2px solid black;
  border-radius: 3px;
`

export default function Card({ children, classname, style }: Props) {
  return (
    <CardContainer className={classname} style={style}>
      {children}
    </CardContainer>
  )
}