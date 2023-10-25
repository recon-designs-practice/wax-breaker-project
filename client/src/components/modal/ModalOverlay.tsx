import React from 'react'
import styled from '@emotion/styled'

type ModalOverlayProps = {
  overlayOpacity?: string
  children: React.ReactElement | React.ReactElement[]
}

const Overlay = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.15);
`

export default function ModalOverlay({ children }: ModalOverlayProps) {
  return (
    <Overlay>
      {children}
    </Overlay>
  )
}