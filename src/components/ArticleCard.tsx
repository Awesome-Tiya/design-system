import React, { useState } from "react";
import upvote from '../assets/upvote.png';

type ArticleCardProps = {
    children: React.ReactNode;
    variant?: 'regular' | 'outlined';
    title: string;
    background: string;
    id: number;
    onUpvote?: (id: number) => void;
    initialUpvotes: number;
}
export const ArticleCard: React.FC<ArticleCardProps> = ({ children, title, variant='regular', onUpvote, id, initialUpvotes, background }) => {
    const style = {
        '--color-background-article-card': background,
    } as React.CSSProperties;
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
        <article className={`article-card ${variant}`} style={style}>
            <div className="upvote-line">
                <button type="button" className="upvotes" onClick={handleUpvote}>
                    <img src={upvote} alt="flower"/>
                <span className="upvote-count">{ formattedUpvotes }</span>
            </button>
                <h3 className="title">{ title }</h3>
            </div>
            <div className="article">{ children }</div>
        </article>
    </>);
}