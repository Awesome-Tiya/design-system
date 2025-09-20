import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from '../components/Comment';

const meta: Meta<typeof Comment> = {
    title: 'components/Comment',
    component: Comment,
    argTypes: {
        id: { control: "text" },
        content: { control: "text" },
        initialUpvotes: { control: "number" },
        onUpvote: { action: "clicked" }
    },
};
export default meta;

type Story = StoryObj<typeof Comment>;

export const Primary: Story = {
    args: {
        id: 1,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
        initialUpvotes: 18000
    },
};
