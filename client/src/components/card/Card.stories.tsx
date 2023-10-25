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
          <h3 style={{ margin: "0px" }}>2013 Topps Finest</h3>
        </div>
        <div>
          <p style={{ margin: "4px 0px 0px 0px" }}>Dec 23rd 2020, 12:00 am</p>
        </div>
      </>
    ),
  },
}

export const NoPadding: StoryObj<typeof Card> = {
  ...CardTemplate,
  args: {
    noPadding: true,
    children: (
      <>
        <div style={{ background: "#EB6E1F", height: "88px" }}></div>
        <div>
          <h3 style={{ margin: "0px", padding: "4px 8px" }}>
            2013 Topps Finest
          </h3>
        </div>
        <div>
          <p style={{ margin: "4px 0px 0px 0px", padding: "2px 8px" }}>
            Dec 23rd 2020, 12:00 am
          </p>
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
          <div
            style={{
              gridColumn: "span 3",
            }}
          >
            <CardStory />
          </div>
        </div>
      </div>
    ),
  ],
}

export default meta
