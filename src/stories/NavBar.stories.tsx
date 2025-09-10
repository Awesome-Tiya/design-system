import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from '../components/NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'components/NavBar',
    component: NavBar,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ["regular", "outlined"],
        },
        logoUrl: { control: "text" },
        color: { control: "color" },
        siteName: { control: "text" },
        feedBackText: { control: "text" }
    },
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
    args: {
        variant: "regular",
        logoUrl: "",
        color: "#daf6e7",
        siteName: "Festive",
        feedBackText: "suggestion",
    },
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        logoUrl: "",
        color: "#daf6e7",
        siteName: "Festive",
        feedBackText: 'suggestion',
    },
};