import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ScrollHorizontal from "./ScrollHorizontal";

const meta: Meta<typeof ScrollHorizontal> = {
  component: ScrollHorizontal,
  title: "Scroll/Horizontal",
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ScrollHorizontal>;

export const Primary: Story = (args) => (
  <ScrollHorizontal data-test-id="ScrollHorizontal-id" {...args} />
);

Primary.args = {
  
};
