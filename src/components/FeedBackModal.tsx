import React, { useEffect, useRef } from "react";

type FeedBackProps = {
    email: string;
    suggestion: string;
    onEmailChange: (value: string) => void;
    onFeedBackChange: (value: string) => void;
    onClick?: () => void;
    onClose?: () => void;
    send: React.ReactNode;
}
export const FeedBackModal: React.FC<FeedBackProps> = ({ onClick, onClose, email, send, suggestion, onEmailChange, onFeedBackChange }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(modalRef.current && !modalRef.current.contains(event.target as Node)) {
                if(onClose) onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);
    return (<>
        <div className="feedback-modal-backdrop">
            <div className="feedback-modal" ref={modalRef}>
                <label htmlFor="email">email id</label>
                <input id="email" title="email" type="email" value={email} onChange={(e) => onEmailChange(e.target.value)} placeholder="" />
                <label htmlFor="suggestion">suggestion</label>
                <textarea id="suggestion" title="suggestion" value={suggestion} onChange={(e) => onFeedBackChange(e.target.value)} placeholder="" />
                <button type="button" className="feedback-button" aria-label="feedback" onClick={onClick}>{ send }</button>
            </div>
        </div>
    </>);
}