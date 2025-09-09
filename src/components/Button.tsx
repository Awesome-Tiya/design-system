import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'primaryOutline' | 'secondaryOutline';
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
    return (<>
        <button className={`custom-button ${variant}`} onClick={onClick}>
            { children }
        </button>
    </>);
};