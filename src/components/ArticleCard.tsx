import React, { useState } from "react";
import upvote from '../assets/upvote.png';

type ArticleCardProps = {
    children: React.ReactNode;
    variant?: 'regular' | 'outlined';
    title: string;
    background: string;
    id: string;
    prev: boolean,
    next: boolean,
    onPrev?: () => void,
    onNext?: () => void,
    onUpvote?: () => void;
    initialUpvotes: number;
}
export const ArticleCard: React.FC<ArticleCardProps> = ({ children, title, variant='regular', next, prev, onPrev, onNext, onUpvote, id, initialUpvotes, background }) => {
    const style = {
        '--color-background-article-card': background,
    } as React.CSSProperties;

    return (<>
        <article className={`article-card ${variant}`} style={style}>
            <div className="upvote-line">
                <button type="button" className="upvotes" onClick={() => onUpvote}>
                    <img src={upvote} alt="flower"/>
                    <span className="upvote-count">{ initialUpvotes }</span>
                </button>
                <h3 className="title">{ title }</h3>
                {prev && <button type="button" className="prev" aria-label="previous" onClick={onPrev}>◀ prev</button>}
                {next && <button type="button" className="next" aria-label="next" onClick={onNext}>next ▶</button>}
            </div>
            <div className="article">{ children }</div>
        </article>
    </>);
}