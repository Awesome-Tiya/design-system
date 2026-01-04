import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from '../components/ArticleCard';

const meta: Meta<typeof ArticleCard> = {
    title: 'components/ArticleCard',
    component: ArticleCard,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ["regular", "outlined"],
        },
        children: { control: "text" },
        next: { control: "boolean" },
        prev: { control: "boolean" },
        title: { control: "text" },
        onUpvote: { action: "upvoted" },
        onPrev: { action: "prev" },
        onNext: { action: "next" },
        id: { control: "text" },
        initialUpvotes: { control: "number" },
        background: { control: "color" },
    },
};
export default meta;

type Story = StoryObj<typeof ArticleCard>;

export const Regular: Story = {
    args: {
        variant: "regular",
        background: "#f9f9d1",
        prev: true,
        id: 1,
        initialUpvotes: 18000,
        title: "Diwali",
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Sit amet tellus cras adipiscing enim eu turpis egestas. Sed elementum tempus egestas sed sed risus pretium quam vulputate.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Eget dolor morbi non arcu risus quis varius quam quisque. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Egestas dui id ornare arcu odio ut sem nulla pharetra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.  Dolor magna eget est lorem ipsum dolor sit amet. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Egestas congue quisque egestas diam in arcu cursus euismod quis. Morbi quis commodo odio.


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Sit amet tellus cras adipiscing enim eu turpis egestas. Sed elementum tempus  est ultricies integer quis auctor. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Egestas congue quisque egestas diam in arcu cursus euismod quis. Morbi quis commodo odio.
`,
    },
};

export const Outline: Story = {
    args: {
        variant: "outlined",
        next: true,
        background: "#f9f9d1",
        id: 1,
        initialUpvotes: 180,
        title: "Diwali",
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Sit amet tellus cras adipiscing enim eu turpis egestas. Sed elementum tempus egestas sed sed risus pretium quam vulputate.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Eget dolor morbi non arcu risus quis varius quam quisque. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Egestas dui id ornare arcu odio ut sem nulla pharetra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.  Dolor magna eget est lorem ipsum dolor sit amet. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Egestas congue quisque egestas diam in arcu cursus euismod quis. Morbi quis commodo odio.


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Sit amet tellus cras adipiscing enim eu turpis egestas. Sed elementum tempus  est ultricies integer quis auctor. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Egestas congue quisque egestas diam in arcu cursus euismod quis. Morbi quis commodo odio.
`,
    },
};