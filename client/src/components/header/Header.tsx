import React from "react"
import styled from "@emotion/styled"

const HeaderComponent = styled.header`
  display: grid;
  grid-template-columns: 20px repeat(12, 1fr) 20px;
`

type HeaderProps = {
  children?: React.ReactElement | React.ReactElement[]
}

export default function Header({ children }: HeaderProps) {
  return (
    <HeaderComponent>
      {children}
    </HeaderComponent>
  )
}
