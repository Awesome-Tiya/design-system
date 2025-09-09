import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
    title: 'components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ["primary", "secondary", "primaryOutline", "secondaryOutline"],
        },
        children: { control: "text" },
        onClick: { action: "clicked" }
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Primary Button",
        variant: "primary",
    },
};
export const WithClick: Story = {
  args: {
    children: "Click Me",
    variant: "primary",
  },
};

export const Secondary: Story = {
    args: {
        children: "Secondary Button",
        variant: "secondary",
    },
};
export const PrimaryOutline: Story = {
  args: {
    children: "Primary Outline",
    variant: "primaryOutline",
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: "Secondary Outline",
    variant: "secondaryOutline",
  },
};
