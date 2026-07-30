import React from "react";

type Sticker = {
    id: string;
    imageUrl: string;
    label?: string;
}
type StickerBarProps = {
    stickers: Sticker[];
    selectedStickerLabel?: string;
    onSelectSticker: (sticker: Sticker) => void;
}

export const StickerBar: React.FC<StickerBarProps> = ({ stickers, selectedStickerLabel, onSelectSticker }) => {
    return (<>
        <div className="sticker-bar">
            {stickers.map((sticker) => (
                <button
                    type="button"
                    key={sticker.id}
                    className={`sticker-button ${selectedStickerLabel === sticker.label ? "selected" : ""}`}
                    onClick={() => onSelectSticker(sticker)}
                >
                    <img src={sticker.imageUrl} alt={sticker.label || "sticker"} />
                </button>
            ))}
        </div>
    </>);
}