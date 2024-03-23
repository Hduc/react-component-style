import type { Meta, StoryObj } from "@storybook/react";
import { CardA } from ".";

const meta: Meta<typeof CardA> = {
  title: "Components/Card/A",
  component: CardA,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};