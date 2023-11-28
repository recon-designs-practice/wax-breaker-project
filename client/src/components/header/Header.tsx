import React from "react"
import styled from "@emotion/styled"
import useBreaksStore from "../../stores/store"
import Button from "../button/Button"
import { Theme } from "@emotion/react"

type HeaderProps = {
  theme?: Theme
  children?: React.ReactElement | React.ReactElement[]
} & React.HTMLAttributes<HTMLHeadElement>

const HeaderComponent = styled.header<HeaderProps>(
  {
    padding: '20px 0px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  ({ theme }) => ({

  })
)

type HeaderTitleProps = {
  theme?: Theme
} & React.HTMLAttributes<HTMLHeadingElement>

const HeaderTitle = styled.h1<HeaderTitleProps>(
  {
    margin: '0px 0px 8px 0px',
    fontFamily: 'sans-serif'
  },
  ({ theme }) => ({
    
  })
)

type HeaderCountProps = {
  theme?: Theme
} & React.HTMLAttributes<HTMLHeadingElement>

const HeaderCount = styled.h4<HeaderCountProps>(
  {
    margin: '0px',
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    '& > span': {
      fontWeight: 'bold'
    },
  },
  ({ theme }) => ({

  })
)

export default function Header({ children }: HeaderProps) {
  const breaks = useBreaksStore((state) => state.breaks)
  const setIsNewBreakModalShowing = useBreaksStore((state) => state.setIsNewBreakModalShowing)

  return (
    <HeaderComponent>
        <div>
          <HeaderTitle>Wax Breaker App</HeaderTitle>
          <HeaderCount>There are <span>{`${breaks.length}`}</span> breaks.</HeaderCount>
        </div>
        <Button
            label="New break"
            style={{ alignSelf: 'center' }}
            onClick={setIsNewBreakModalShowing}
          />
    </HeaderComponent>
  )
}
