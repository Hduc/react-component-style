import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Transform from "./Transition";

const meta: Meta<typeof Transform> = {
  component: Transform,
  title: 'Animation/Transform',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Transform>;


export const Default: Story = (args) => (
  <Transform data-test-id="transition-id" {...args} >
    <div style={{ width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'slateblue' }}>
      Hello world
    </div>
  </Transform>
);
Default.args = {
  type: 'linear',
};


export const Home: Story = (args) => (
  <Transform data-test-id="transition-id" {...args} >
    <div style={{ width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'slateblue' }}>
      Hello world
    </div>
  </Transform>
);
Home.storyName = "Rotate and width"
Home.args = {
  type: 'linear',
  height: "100px",
  toHeight: '100px',
  width: '100px',
  toWidth: '400px',
  timeWidth: 0.2,
  transform: "rotate(20deg)"
};

export const transformSkewY: Story = (args) => (
  <Transform data-test-id="transition-id" {...args} >
    <div style={{ width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'slateblue' }}>
      Hello world
    </div>
  </Transform>
);
transformSkewY.storyName = "Transform skewY" 
transformSkewY.args = {
  type: 'linear',
  height: "100px",
  toHeight: '100px',
  width: '100px',
  toWidth: '100px',
  timeWidth: 0,
  transform: "skewY(20deg)"
};

export const skewYAndScale: Story = (args) => (
  <Transform data-test-id="transition-id" {...args} >
    <div style={{ width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'slateblue' }}>
      Hello world
    </div>
  </Transform>
);
skewYAndScale.storyName="Transform skewY and scale"
skewYAndScale.args = {
  type: 'linear',
  height: "100px",
  toHeight: '100px',
  width: '100px',
  toWidth: '100px',
  timeWidth: 0,
  transform: 'scale(1.5) skewY(20deg)'
};

export const transformScale: Story = (args) => (
  <Transform data-test-id="transition-id" {...args} >
    <div style={{ width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'slateblue' }}>
      Hello world
    </div>
  </Transform>
);
transformScale.storyName = "Transform scale" 
transformScale.args = {
  type: 'linear',
  height: "100px",
  toHeight: '100px',
  width: '100px',
  toWidth: '100px',
  timeWidth: 0,
  transform: 'scale(1.5)'
};


