import React, { useEffect } from "react";

export enum FlagReason {
  SPAM,
  DISRESPECT,
  HATE_SPEECH,
  HARASSMENT,
  MISINFORMATION,
  VULGAR,
  OTHER
}

type FlagModalProps = {
    open: boolean;
    reasonOptions?: FlagReason[];
    onSubmit?: (reason: FlagReason) => void;
    onClose?: () => void;
}

export const FlagModal: React.FC<FlagModalProps> = ({ open, reasonOptions, onSubmit, onClose }) => {
    const reasons = reasonOptions ?? Object.values(FlagReason).filter(value => typeof value === 'number') as FlagReason[];
    const [selectedReason, setSelectedReason] = React.useState<FlagReason | null>(null);
    useEffect(()=> {
        if(!open) {
            setSelectedReason(null);
        }
    }, [open]);
    if(!open) return null;
    const handleSubmit = () => {
        if(!selectedReason) return;
        onSubmit?.(selectedReason);
    };
    const handleSelect = (reason: FlagReason) => {
        setSelectedReason(reason);
    };
    return (<>
        <div className="flag-modal-backdrop" onClick={onClose}>
            <div role="dialog" aria-labelledby="flag-modal-title" className="flag-modal" onClick={(e) => e.stopPropagation()}>
                <div className="close-button" aria-label="close-flag-modal" onClick={onClose}>x</div>
                <h2 className="flag-modal-title" id="flag-modal-title">Flagging reason</h2>
                <div className="flag-modal-divider"/>
                <ul role="list">
                    {reasons.map((reason) => (
                        <li role="listitem" key={reason}>
                            <button type="button" className={selectedReason === reason ? "selected" : ""} onClick={() => handleSelect(reason)}>
                                {FlagReason[reason]}
                            </button>
                        </li>
                    ))}
                </ul>
                <button type="button" className="submit-flag" disabled={!selectedReason} onClick={handleSubmit}>Flag</button>
            </div>
        </div>
    </>);
};