import React from "react";

type NavBarProps = {
    children?: React.ReactNode;
    logoUrl?: string;
    color?: string;
    variant?: 'regular' | 'outlined';
    siteName?: string;
    sticker?: string;
    onStickerClick?: () => void;
    onClick?: () => void;
    feedBackText?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ onClick, children, sticker, onStickerClick, logoUrl, color='#daf6e7', variant = 'regular', siteName, feedBackText = 'suggestion' }) => {
    const style = {
        '--color-navbar': color,
    } as React.CSSProperties;
    return (<>
        <nav className={`navbar ${variant}`} style={style}> 
            <div className="left-section">
                <div className="logo">{ logoUrl && <img src={logoUrl} alt="logo"/> }</div>
                <div className="site-name">{ siteName }</div>
            </div>
            <div className="section">
                <span onClick={onStickerClick} className="sticker">{ sticker }</span>
                <span onClick={onClick} className="feedback">{ feedBackText }</span>
            </div>
        </nav>
    </>)
}
