import React, { RefObject } from "react";
import upvote from '../assets/upvote.png';

type ArticleCardProps = {
    children: React.ReactNode;
    variant?: 'regular' | 'outlined';
    title: string;
    background: string;
    id: string;
    prev: boolean,
    textRef: RefObject<HTMLDivElement | null>,
    buttonRef: RefObject<HTMLButtonElement | null>,
    titleRef: RefObject<HTMLHeadingElement | null>,
    next: boolean,
    onPrev?: () => void,
    onNext?: () => void,
    onUpvote?: () => void;
    upvotes: number;
}
export const ArticleCard: React.FC<ArticleCardProps> = ({ children, title, variant='regular', next, titleRef, buttonRef, textRef, prev, onPrev, onNext, onUpvote, id, upvotes, background }) => {
    const style = {
        '--color-background-article-card': background,
    } as React.CSSProperties;

    const upvoteNum = Number.isFinite(upvotes) ? upvotes : 0;
    const formattedUpvotes = new Intl.NumberFormat('en', {
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 2
    }).format(upvoteNum);

    return (<>
        <article className={`article-card ${variant}`} style={style}>
            <div className="upvote-line">
                <button ref={buttonRef} type="button" className="upvotes" onClick={onUpvote}>
                    <img src={upvote} alt="flower"/>
                    <span className="upvote-count">{ formattedUpvotes }</span>
                </button>
                <h3 ref={titleRef} className="title">{ title }</h3>
                {prev && <button ref={buttonRef} type="button" className="prev" aria-label="previous" onClick={onPrev}>◀ prev</button>}
                {next && <button ref={buttonRef} type="button" className="next" aria-label="next" onClick={onNext}>next ▶</button>}
            </div>
            <div ref={textRef} className="article">
                {typeof children === "string"
                    ? children.split("\n").map((para, i) => (
                        <p key={i}>{para}</p>
                    ))
                    : children}
            </div>
        </article>
    </>);
}