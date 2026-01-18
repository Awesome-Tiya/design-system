import { useEffect, useState } from "react";

export const Loader = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);
    
    return (<>
        <div className="loader">
            <div className="sparkles">
                <span className="sparkle small s1" />
                <span className="sparkle small s2" />
                <span className="sparkle small s3" />
                <span className="sparkle small s4" />
                <span className="sparkle small s5" />
                <span className="sparkle mid one" />
            </div>
        </div>
        <div className="loading-text" style={{ left: pos.x, top: pos.y}}>loading...</div>
    </>);
};