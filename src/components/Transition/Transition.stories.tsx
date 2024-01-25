import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Transform from "./Transition";

const meta: Meta<typeof Transform> = {
  component: Transform,
  title: "Transform",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Transform>;

export const Default: Story = (args) => (
  <Transform data-test-id="transition-id" {...args} />
  //   Xin chào các bạn
  // </Transform>
);
Default.args = {
  
};
