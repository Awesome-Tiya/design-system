import type { Meta, StoryObj } from '@storybook/react';
import { FeedBackModal } from '../components/FeedBackModal';

const meta: Meta<typeof FeedBackModal> = {
    title: 'components/FeedBackModal',
    component: FeedBackModal,
    argTypes: {
        email: { control: 'text' },
        suggestion: { control: 'text' },
        onClick: { action: "clicked" },
        onClose: { action: "closed" }
    },
};
export default meta;

type Story = StoryObj<typeof FeedBackModal>;

export const Regular: Story = {
    args: {
        send: <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#1f1f1f"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    }
}; 
 