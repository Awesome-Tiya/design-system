import React from "react";

type ArticleCardProps = {
    children: React.ReactNode;
    variant?: 'regular' | 'outlined';
    title: string;
    background: string;
}
export const ArticleCard: React.FC<ArticleCardProps> = ({ children, title, variant='regular', background }) => {
    const style = {
        '--color-background-article-card': background,
    } as React.CSSProperties;
    return (<>
        <article className={`article-card ${variant}`} style={style}>
            <h3 className="title">{ title }</h3>
            <div className="article">{ children }</div>
        </article>
    </>);
}