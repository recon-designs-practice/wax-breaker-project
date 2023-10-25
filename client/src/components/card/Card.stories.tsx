import { Meta, StoryObj } from "@storybook/react"
import Card from "./Card"

const CardTemplate: StoryObj<typeof Card> = {
  render: (args) => <Card {...args} />,
}

export const Default: StoryObj<typeof Card> = {
  ...CardTemplate,
  args: {
    children: (
      <>
        <div style={{ border: '1px dashed hotpink' }}>
          <h2>Card title</h2>
        </div>
        <div style={{ border: '1px dashed hotpink' }}>
          <p>Card body</p>
        </div>
        <div style={{ border: '1px dashed hotpink' }}>
          <p>Card footer</p>
        </div>
      </>
    ),
  },
}

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
}

export default meta
