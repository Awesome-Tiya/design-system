import React, { useEffect } from "react";

type NotificationProps = {
    type: "success" | "error" | "info";
    message: string;
    time: number;
    onClose: () => void;
    closeable?: boolean;
}
export const Notification: React.FC<NotificationProps> = ({ type, message, time, onClose, closeable }) => {
    useEffect(() => {
        if (!closeable) {
            const timer = setTimeout(() => {
                onClose();
            }, time);

            return () => clearTimeout(timer);
        }
    }, [closeable, time, onClose]);

    return (
        <>
            <div className={`notification ${type}`}>
                <p id="notification">{message}</p>
                {closeable && <button type="button" onClick={onClose} className="close-btn">x</button>}
            </div>
        </>
    );
}