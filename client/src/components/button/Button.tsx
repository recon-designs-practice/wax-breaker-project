type Props = {
  /**
   * This is a description of the label prop.
   */
  label: string
  /**
   * Determines background and border styles for Primary or Secondary buttons.
   */
  buttonType: 'primary' | 'secondary'
}

export default function Button({ label = 'Button', buttonType = 'primary' }: Props) {
  console.log(555, buttonType)

  return (
    <button>{label}</button>
  )
}