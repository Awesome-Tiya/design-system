import React from "react";

type CommentBoxProps = {
    content: string;
    onChange: (value: string) => void;
    onClick?: () => void;
    send: React.ReactNode;
}

export const CommentBox: React.FC<CommentBoxProps> = ({ content, onChange, onClick, send }) => {

    return (<>
        <div className="comment-box">
            <textarea placeholder="type here to comment ........." value={content} onChange={(e) => onChange(e.target.value)} className="comment-text" />
            <button type="button" className="post-comment" onClick={onClick}>
                { send }
            </button>
        </div>
    </>);
}