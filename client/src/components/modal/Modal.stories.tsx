import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Modal, { ModalProps } from './Modal'

export const Default: StoryObj<typeof Modal> = {
  render: args => <Modal {...args} />,
  args: {
    msg: 'Modal title'
  }
}

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal
}

export default meta