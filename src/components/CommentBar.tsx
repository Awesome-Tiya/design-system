import React from "react";
import { Comment } from "./Comment";

type CommentProps = {
    id: string;
    content: string;
    upvotes: number;
}
type CommentBarProps = {
    variant?: 'regular' | 'outlined';
    comment: CommentProps;
    onClick?: () => void;
    button: React.ReactNode;
}
export const CommentBar: React.FC<CommentBarProps> = ({ onClick, comment, variant='regular', button }) => {

    return (<>
        <article className={`comment-bar ${variant}`}>
            <Comment id={comment.id}
                content={comment.content} upvotes={comment.upvotes} />
            <button type="button" className="button" aria-label="comment bar button" onClick={onClick}>{ button }</button>
        </article>
    </>);
}