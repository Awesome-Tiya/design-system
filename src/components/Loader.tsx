export const Loader = () => {
    
    return (<>
        <div className="loader">
            <div className="sparkles">
                {Array.from({ length: 14 }).map((_, index) => (
                    <span key={index} className="sparkle" />
                ))}
            </div>
        </div>
    </>);
};