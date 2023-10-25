import React from "react"
import styled from "@emotion/styled"

type Props = {
  children?: React.ReactNode
  classname?: string
  style?: any
  noPadding?: boolean
}

const CardContainer = styled.div<Props>(
  {
    border: "2px solid black",
    borderRadius: "2px",
  },
  ({ noPadding }) => ({
    padding: noPadding ? "0px" : "12px",
  })
)

export default function Card({ children, classname, style, noPadding }: Props) {
  return (
    <CardContainer className={classname} style={style} noPadding={noPadding}>
      {children}
    </CardContainer>
  )
}
