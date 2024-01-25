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
  <Transform data-test-id="transition-id" {...args} >
    <div style={{width:'100%',height:'100%',textAlign:'center'}}>
      Xin chafo
    </div>
  </Transform>
);
Default.args = {
  
};
