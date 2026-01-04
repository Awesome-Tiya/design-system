import React from "react";
import { Comment } from "./Comment";
import { CommentBox } from "./CommentBox";

type CommentProps = {
    id: number;
    content: string;
    onUpvote?: (id: number) => void;
    initialUpvotes: number;
}

type CommentBoxProps = {
    content: string;
    onChange: (value: string) => void;
    onClick?: () => void;
    send: React.ReactNode;
}

type CommentsModalProps = {
    variant?: 'regular' | 'outlined';
    comments: CommentProps[];
    commentBox: CommentBoxProps;
    numberOfComments: number;
    onClick?: () => void;
    backButton: React.ReactNode;
}
export const CommentsModal: React.FC<CommentsModalProps> = ({ onClick, comments, commentBox, numberOfComments, variant='regular', backButton }) => {

    return (<>
        <div className={`comments-modal ${variant}`}>
            <div className="line">
                <button type="button" className="back-button" aria-label="back button" onClick={onClick}>{ backButton }</button>
                <h3 className="comments">Comments {numberOfComments}</h3>
            </div>
            <div className="comment-list">
                {comments.map((comment) => (
                <Comment key={comment.id} id={comment.id}
                    content={comment.content} initialUpvotes={comment.initialUpvotes} onUpvote={comment.onUpvote} />))}
            </div>
            <div className="comment-box-container">
                <CommentBox content={commentBox.content} onChange={commentBox.onChange} onClick={commentBox.onClick} send={commentBox.send} />
            </div>
        </div>
    </>);
}