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
        <div>
          <h2 style={{ margin: '0px' }}>Card title</h2>
        </div>
        <div>
          <p style={{ margin: '4px 0px 0px 0px' }}>Card body</p>
        </div>
      </>
    ),
  },
}

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  decorators: [
    (CardStory) => (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "20px",
          }}
        >
          <div style={{
            gridColumn: 'span 3'
          }}>
            <CardStory />
          </div>
        </div>
      </div>
    ),
  ],
}

export default meta
