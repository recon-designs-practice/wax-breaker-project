import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { Meta, StoryObj } from '@storybook/react'
import {
    Title,
    Description,
    ArgTypes,
    Canvas,
    Stories,
  } from "@storybook/blocks"
  import Header from './Header'

  export const Default: StoryObj<typeof Header> = {
    render: args => <Header {...args} />,
    args: {
      title: 'This is a header',
      links: [
        { linkText: 'Link 1', path: 'sign-in' },
        { linkText: 'Link 2', path: 'dashboard' }
      ]
    },
    decorators: [withRouter]
  }

  const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header
  }

  export default meta