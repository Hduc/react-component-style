import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Slideshow from "./Slideshow";

const meta: Meta<typeof Slideshow> = {
  component: Slideshow,
  title: "Image/Slideshow",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Slideshow>;

export const Default: Story = (args) => (
  <div style={{ width: '60%', margin: '5px auto' }}>
    <Slideshow data-test-id="Slideshow-id" {...args} />
  </div>
);
Default.args = {
  active: 0,
  showThumb:true,
  showAction:true,
  automatic:2000,
  data: [
    { id: '1234', url: 'https://product.minhlong.com/product/01071100903/avatar.png', name: '01071100903' },
    { id: '1235', url: 'https://product.minhlong.com/product/010711139/avatar.png', name: '010711139' },
    { id: '1236', url: 'https://product.minhlong.com/product/01071113903/avatar.png?v=1', name: '01071113903' },
  ]
};
export const FullWidth: Story = (args) => (
  <div style={{ width: '100%' }}>
    <Slideshow data-test-id="Slideshow-id" {...args} />
  </div>
);
FullWidth.args = {
  active: 0,
  showThumb:false,
  showAction:false,
  automatic:2000,
  data: [
    { id: '1234', url: 'https://product.minhlong.com/product/01071100903/avatar.png', name: '01071100903' },
    { id: '1235', url: 'https://product.minhlong.com/product/010711139/avatar.png', name: '010711139' },
    { id: '1236', url: 'https://product.minhlong.com/product/01071113903/avatar.png?v=1', name: '01071113903' },
  ]
};
