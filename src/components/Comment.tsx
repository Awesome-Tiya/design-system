import React, { useState } from "react";
import upvoteFlower from '../assets/upvote-flower.png';

type CommentProps = {
    id: number;
    content: string;
    onUpvote?: (id: number) => void;
    initialUpvotes: number;
}

export const Comment: React.FC<CommentProps> = ({ id, content, onUpvote, initialUpvotes }) => {
    const [upvotes, setUpvotes] = useState(initialUpvotes);
    const handleUpvote = () => {
        setUpvotes(prev => prev + 1);
        if (onUpvote) onUpvote(id);
    }
    const formattedUpvotes = new Intl.NumberFormat('en', {
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 2
    }).format(upvotes);
    return (<>
        <article className='comment'>
            <button type="button" className="upvote" onClick={handleUpvote}>
                <img src={upvoteFlower} alt="flower"/>
                <span className="upvote-count">{ formattedUpvotes }</span>
            </button>
            <p className="comment-content">{ content }</p>
        </article>
    </>);
}