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
  }),
  ({ theme }) => ({
    /**
     * TODO: Come back and fix this theme error. Everything works as expected, but TS ain't happy
     * 
     * // @ts-expect-error Property 'color' does not... WTF???
     */
    
    background: theme.color.primary
  })
)

export default function Card({ children, classname, style, noPadding }: Props) {
  return (
    <CardContainer className={classname} style={style} noPadding={noPadding}>
      {children}
    </CardContainer>
  )
}
