import React from "react"
import { withRouter } from "storybook-addon-react-router-v6"
import { Meta, StoryObj } from "@storybook/react"
import {
  Title,
  Description,
  ArgTypes,
  Canvas,
  Stories,
} from "@storybook/blocks"
import Header from "./Header"
import { Button } from "be-ubiquitous"

export const Default: StoryObj<typeof Header> = {
  render: (args) => <Header {...args} />,
  args: {
    children: (
      <>
        <h1 style={{ margin: "0px", gridColumn: "span 6" }}>Title here</h1>
        <h4
          style={{
            margin: "0px",
            paddingTop: "8px",
            gridColumn: "7 / 9",
            textAlign: "center",
          }}
        >
          16 breaks
        </h4>
        <Button label="Add break" style={{ gridColumn: "12 / 15" }} />
      </>
    ),
  },
  decorators: [withRouter],
}

export const Custom: StoryObj<typeof Header> = {
  render: (args) => <Header {...args} />,
  args: {
    children: (
      <>
        <h1 style={{ margin: "0px", gridColumn: "span 6" }}>Title here</h1>
        <h4
          style={{
            margin: "0px",
            paddingTop: "8px",
            gridColumn: "7 / 9",
            textAlign: "center",
          }}
        >
          16 breaks
        </h4>
        <Button label="Add break" style={{ gridColumn: "12 / 15" }} />
      </>
    ),
  },
  decorators: [withRouter],
}

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
}

export default meta
