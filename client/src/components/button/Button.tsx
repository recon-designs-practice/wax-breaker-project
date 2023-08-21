import styled from "@emotion/styled"

const ButtonComponent = styled.button`
  color: white;
  background: dodgerblue;
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
  /**
   * Need to figure out some copy for the type prop.
   */
  type: "button" | "submit" | "reset"
}

export default function Button({
  label = "Button",
  buttonType = "primary",
  type = "button",
  ...otherProps
}: Props) {
  // console.log(buttonType)

  return <ButtonComponent type={type} {...otherProps}>{label}</ButtonComponent>
}
