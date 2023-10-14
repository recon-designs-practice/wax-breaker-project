import type { Meta, StoryObj } from "@storybook/react"
import {
  Title,
  Description,
  ArgTypes,
  Canvas,
  Stories,
} from "@storybook/blocks"
import Button from "../button/Button"

const ButtonStoryTemplate: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />
}

/**
 * Here is a description for the `Default` story.
 */
export const Default: StoryObj<typeof Button> = {
  ...ButtonStoryTemplate,
  args: {
    label: 'Label',
    onClick: () => alert('Button clicked.')
  }
}

/**
 * Here is a description for the `Type` story.
 */
export const Type: StoryObj<typeof Button> = {
  name: 'Button Type',
  ...ButtonStoryTemplate,
  args: {
    label: 'Label',
    type: 'button',
    onClick: () => alert('Button clicked.')
  }
}

/**
 * Buttons are used primarily for actions, such as “Add” or “Close”.
 * Secondary buttons, which look similar to links, are used for less important or less commonly used actions, such as “view shipping settings”.
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select"  },
    }
  },
  parameters: {
    docs: {
      page: () => (
        <div>
          <Title />
          <Description />
          <Canvas of={Default} sourceState="hidden" />
          <ArgTypes />
          <Stories />
        </div>
      ),
    },
  },
}

export default meta
