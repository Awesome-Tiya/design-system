import type { Meta, StoryObj } from '@storybook/react';
import { CommentBar } from '../components/CommentBar';

const meta: Meta<typeof CommentBar> = {
    title: 'components/CommentBar',
    component: CommentBar,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ["regular", "outlined"],
        },
        onClick: { action: "clicked" }
    },
};
export default meta;

type Story = StoryObj<typeof CommentBar>;

export const Regular: Story = {
    args: {
        variant: "regular",
        comment: {
            id: 1,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
            upvotes: 18000,
        },
        button: <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#1f1f1f"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
    },
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        comment: {
            id: 1,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
            upvotes: 18000,
        },
        button: <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#1f1f1f"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
    },
};
