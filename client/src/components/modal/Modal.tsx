import React from 'react'
import styled from '@emotion/styled'
import ModalOverlay from './ModalOverlay'
import ModalContainer from './ModalContainer'

const ModalComponent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

export type ModalProps = {
  children: React.ReactElement | React.ReactElement[]
}

export default function Modal({ children }: ModalProps) {
  return (
    <ModalComponent>
      <ModalOverlay>
        <ModalContainer>
          {children}
        </ModalContainer>
      </ModalOverlay>
    </ModalComponent>
  )
}