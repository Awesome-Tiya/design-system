import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '../components/Notification';
import { act } from 'react';

const meta: Meta<typeof Notification> = {
    title: 'components/Notification',
    component: Notification,
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ["success", "error", "info"],
        },
        message: {
            control: { type: 'text' },
        },
        time: {
            control: { type: 'number' },
        },
        onClose: { action: "Notification closed" },
        closeable: {
            control: { type: 'boolean' },
        }
    },
};
export default meta;

type Story = StoryObj<typeof Notification>;

export const Success: Story = {
    args: {
        type: "success",
        message: `Your action was successful!`,
        time: 3000,
        closeable: false,
    },
};
