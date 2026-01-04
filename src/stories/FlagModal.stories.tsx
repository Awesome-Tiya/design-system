import type { Meta, StoryObj } from '@storybook/react';
import { FlagModal, FlagReason } from '../components/FlagModal';
import { useState } from 'react';

const meta: Meta<typeof FlagModal> = {
    title: 'components/FlagModal',
    component: FlagModal,
    argTypes: {
        open: { control: 'boolean' },
        reasonOptions: { control: 'object' },
        onSubmit: { action: "submitted" },
        onClose: { action: "closed" }
    }
};
export default meta;

type Story = StoryObj<typeof FlagModal>;

export const Regular: Story = {
    args: {
        open: true,
        reasonOptions: [FlagReason.SPAM, FlagReason.DISRESPECT, FlagReason.HATE_SPEECH, FlagReason.HARASSMENT, FlagReason.MISINFORMATION, FlagReason.VULGAR, FlagReason.OTHER],
    }
};