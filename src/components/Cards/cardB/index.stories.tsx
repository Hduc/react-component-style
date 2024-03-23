import type { Meta, StoryObj } from "@storybook/react";
import { CardB } from ".";

const meta: Meta<typeof CardB> = {
  title: "Components/Card/B",
  component: CardB,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};