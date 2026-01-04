import React, { useEffect } from "react";
import { Comment } from "./Comment";
import { CommentBox } from "./CommentBox";

type CommentProps = {
    id: number;
    content: string;
    flagged?: boolean;
    upvotes: number;
}

type CommentBoxProps = {
    content: string;
    send: React.ReactNode;
}

type CommentsModalProps = {
    variant?: 'regular' | 'outlined';
    comments: CommentProps[];
    commentBox: CommentBoxProps;
    numberOfComments: number;
    onUpvote?: (id: number) => void;
    onFlag?: (id: number) => void;
    onChange: (value: string) => void;
    onCommentClick?: () => void;
    onClick?: () => void;
    backButton: React.ReactNode;
}
export const CommentsModal: React.FC<CommentsModalProps> = ({ onUpvote, onFlag, onChange, onCommentClick, onClick, comments, commentBox, numberOfComments, variant='regular', backButton }) => {
    const [commentList, setCommentList] = React.useState<CommentProps[]>(comments);
    useEffect(() => {
        setCommentList(comments)
    }, [comments]);
    const handleUpvote = (id: number) => {
        setCommentList(prev =>
            prev.map(c => 
                c.id === id ? { ...c, upvotes: c.upvotes+1 } : c
            )
        );
        onUpvote?.(id);
    }
    const handleFlag = (id: number) => {
        onFlag?.(id);
    }

    return (<>
        <div className={`comments-modal ${variant}`}>
            <div className="line">
                <button type="button" className="back-button" aria-label="back button" onClick={onClick}>{ backButton }</button>
                <h3 className="comments">Comments {numberOfComments}</h3>
            </div>
            <div className="comment-list">
                {commentList.map((comment) => (
                <Comment key={comment.id} id={comment.id}
                    content={comment.content} upvotes={comment.upvotes} onFlag={handleFlag} onUpvote={handleUpvote} />))}
            </div>
            <div className="comment-box-container">
                <CommentBox content={commentBox.content} onChange={onChange} onClick={onCommentClick} send={commentBox.send} />
            </div>
        </div>
    </>);
}