import React from 'react'
import styled from '@emotion/styled'

const ModalContainer = styled.div`
  border: 2px solid hotpink;
`

export type ModalProps = {
  msg?: string
}

export default function Modal({ msg }: ModalProps) {
  return (
    <ModalContainer>{msg}</ModalContainer>
  )
}