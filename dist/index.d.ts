import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'primaryOutline' | 'secondaryOutline';
    onClick?: () => void;
};
declare const Button: React.FC<ButtonProps>;

type NavBarProps = {
    children?: React.ReactNode;
    logoUrl?: string;
    color?: string;
    variant?: 'regular' | 'outlined';
    siteName?: string;
    feedBackText?: string;
};
declare const NavBar: React.FC<NavBarProps>;

type ArticleCardProps = {
    children: React.ReactNode;
    variant?: 'regular' | 'outlined';
    title: string;
    background: string;
    id: string;
    prev: boolean;
    next: boolean;
    onPrev?: () => void;
    onNext?: () => void;
    onUpvote?: () => void;
    upvotes: number;
};
declare const ArticleCard: React.FC<ArticleCardProps>;

type CommentProps$2 = {
    id: string;
    content: string;
    onUpvote?: () => void;
    onFlag?: () => void;
    flagged?: boolean;
    upvotes: number;
};
declare const Comment: React.FC<CommentProps$2>;

type CommentProps$1 = {
    id: string;
    content: string;
    upvotes: number;
};
type CommentBarProps = {
    variant?: 'regular' | 'outlined';
    comment: CommentProps$1;
    onClick: () => void;
    onUpvote: () => void;
    onFlag: () => void;
    flagged: boolean;
    button: React.ReactNode;
};
declare const CommentBar: React.FC<CommentBarProps>;

type CommentBoxProps$1 = {
    content: string;
    onChange: (value: string) => void;
    onClick?: () => void;
    send: React.ReactNode;
};
declare const CommentBox: React.FC<CommentBoxProps$1>;

type CommentProps = {
    id: string;
    content: string;
    flagged?: boolean;
    upvotes: number;
};
type CommentBoxProps = {
    content: string;
    send: React.ReactNode;
};
type CommentsModalProps = {
    variant?: 'regular' | 'outlined';
    comments: CommentProps[];
    commentBox: CommentBoxProps;
    numberOfComments: number;
    onUpvote?: (id: string) => void;
    onFlag?: (id: string) => void;
    onChange: (value: string) => void;
    onCommentClick?: () => void;
    onClick?: () => void;
    backButton: React.ReactNode;
};
declare const CommentsModal: React.FC<CommentsModalProps>;

type FeedBackProps = {
    email: string;
    suggestion: string;
    onEmailChange: (value: string) => void;
    onFeedBackChange: (value: string) => void;
    onClick?: () => void;
    onClose?: () => void;
    send: React.ReactNode;
};
declare const FeedBackModal: React.FC<FeedBackProps>;

declare enum FlagReason {
    SPAM = 0,
    DISRESPECT = 1,
    HATE_SPEECH = 2,
    HARASSMENT = 3,
    MISINFORMATION = 4,
    VULGAR = 5,
    OTHER = 6
}
type FlagModalProps = {
    open: boolean;
    reasonOptions?: FlagReason[];
    onSubmit?: (reason: FlagReason) => void;
    onClose?: () => void;
};
declare const FlagModal: React.FC<FlagModalProps>;

declare const Loader: () => react_jsx_runtime.JSX.Element;

export { ArticleCard, Button, Comment, CommentBar, CommentBox, CommentsModal, FeedBackModal, FlagModal, FlagReason, Loader, NavBar };
