import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ScrollInfinite from './ScrollInfinite'

const meta: Meta<typeof ScrollInfinite> = {
  component: ScrollInfinite,
  title: 'Scroll/Infinite',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof ScrollInfinite>

export const Default: Story = (args) => <ScrollInfinite data-test-id='ScrollInfinite-id' {...args} />
Default.args = {}
