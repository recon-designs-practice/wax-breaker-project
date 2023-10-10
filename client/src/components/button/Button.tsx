import React from 'react'
import styled from "@emotion/styled"

const ButtonComponent = styled.button`
  color: white;
  background: red;
`

type Props = {
  /**
   * This is a description of the label prop.
   */
  label: string
  /**
   * Determines background and border styles for Primary or Secondary buttons.
   */
  buttonType: "primary" | "secondary"
}

type ButtonProps = Props & React.ComponentProps<typeof ButtonComponent>

export default function Button({
  label = "Button",
  buttonType = "primary",
  ...otherProps
}: ButtonProps) {

  return <ButtonComponent {...otherProps}>{label}</ButtonComponent>
}
