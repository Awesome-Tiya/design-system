import type { Meta, StoryObj } from '@storybook/react';
import { CommentsModal } from '../components/CommentsModal';
import { useState } from 'react';

const meta: Meta<typeof CommentsModal> = {
    title: 'components/CommentsModal',
    component: CommentsModal,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ["regular", "outlined"],
        },
        comments: { control: 'object' },
        commentBox: { control: 'object' },
        numberOfComments: { control: 'number' },
        backButton: { control: 'object' },
        onClick: { action: "clicked" }
    },
};
export default meta;

type Story = StoryObj<typeof CommentsModal>;

export const Regular: Story = {
    render: (args) => {
        const [commentText, setCommentText] = useState("");
        return (<>
            <CommentsModal {...args}
                commentBox={{
                    content: commentText,
                    onChange: setCommentText,
                    send: args.commentBox.send
                }}
            />
        </>);
    },
    args: {
        variant: "regular",
        comments: [
            {
                id: 1,
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
                initialUpvotes: 18000,
            },
            {
                id: 2,
                content: `Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
                initialUpvotes: 18000,
            },
            {
                id: 3,
                content: `Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
                initialUpvotes: 18000,
            },
            {
                id: 4,
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus Lorem4 ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
                initialUpvotes: 18000,
            },
            {
                id: 5,
                content: `Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
                initialUpvotes: 18000,
            }
        ],
        commentBox: {
            content: "",
            onChange: (value: string) => { console.log(value); },
            send: <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#1f1f1f"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        },
        numberOfComments: 5,
        backButton: <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#1f1f1f"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
    },
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        comments: [
            {
                id: 1,
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
                initialUpvotes: 18000,
            },
            {
                id: 1,
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus `,
                initialUpvotes: 18000,
            }
        ],
        commentBox: {
            content: "",
            onChange: (value: string) => { console.log(value); },
            send: <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#1f1f1f"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>,
        },
        numberOfComments: 2,
        backButton: <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#1f1f1f"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
    },
};
