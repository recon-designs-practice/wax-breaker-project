import type { Meta, StoryObj } from "@storybook/react"
import {
  Title,
  Description,
  ArgTypes,
  Canvas,
  Stories,
} from "@storybook/blocks"
import Button from "../button/Button"

/**
 * Here is a description for the `Primary` story.
 */
export const Primary: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Primary",
  },
}

/**
 * Here is a description for the `Secondary` story.
 */
export const Secondary: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Secondary",
    buttonType: "secondary",
  },
}

/**
 * Buttons are used primarily for actions, such as “Add” or “Close”.
 * Secondary buttons, which look similar to links, are used for less important or less commonly used actions, such as “view shipping settings”.
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    buttonType: {
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <div>
          <Title />
          <Description />
          <Canvas of={Primary} sourceState="hidden" />
          <ArgTypes />
          <Stories />
        </div>
      ),
    },
  },
}

export default meta
