import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Animation from "./Animation";

const meta: Meta<typeof Animation> = {
  component: Animation,
  title: "Animation/Animations",
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Animation>;

export const Default: Story = (args) => (
  <Animation data-test-id="transition-id" {...args} >
    <div style={{width:'100%',height:'100%',textAlign:'center',backgroundColor:'slateblue'}}>
      Hello world
    </div>
  </Animation>
);
Default.args = {
  
};
