import React from 'react'
import styled from '@emotion/styled'

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

const Container = styled.div`
  width: 50%;
  background: white;
  border: 2px solid black;
  border-radius: 2px;
`

export default function ModalContainer({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}