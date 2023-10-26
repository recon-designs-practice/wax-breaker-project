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
    borderRadius: "2px",
  },
  ({ noPadding }) => ({
    padding: noPadding ? "0px" : "12px",
  }),
  ({ theme }) => ({
    border: `2px solid ${theme.color.onPrimary}`,
    background: theme.color.surfacePrimary
  })
)

export default function Card({ children, classname, style, noPadding }: Props) {
  return (
    <CardContainer className={classname} style={style} noPadding={noPadding}>
      {children}
    </CardContainer>
  )
}
