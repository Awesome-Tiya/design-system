// src/components/Button.tsx
import { Fragment, jsx } from "react/jsx-runtime";
var Button = ({ children, variant = "primary", onClick }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("button", { className: `custom-button ${variant}`, onClick, children }) });
};

// src/components/StickerBar.tsx
import { Fragment as Fragment2, jsx as jsx2 } from "react/jsx-runtime";
var StickerBar = ({ stickers, onSelectSticker }) => {
  return /* @__PURE__ */ jsx2(Fragment2, { children: /* @__PURE__ */ jsx2("div", { className: "sticker-bar", children: stickers.map((sticker) => /* @__PURE__ */ jsx2(
    "button",
    {
      type: "button",
      className: "sticker-button",
      onClick: () => onSelectSticker(sticker),
      children: /* @__PURE__ */ jsx2("img", { src: sticker.imageUrl, alt: sticker.label || "sticker" })
    },
    sticker.id
  )) }) });
};

// src/components/NavBar.tsx
import { Fragment as Fragment3, jsx as jsx3, jsxs } from "react/jsx-runtime";
var NavBar = ({ onClick, children, sticker, onStickerClick, logoUrl, color = "#daf6e7", variant = "regular", siteName, feedBackText = "suggestion" }) => {
  const style = {
    "--color-navbar": color
  };
  return /* @__PURE__ */ jsx3(Fragment3, { children: /* @__PURE__ */ jsxs("nav", { className: `navbar ${variant}`, style, children: [
    /* @__PURE__ */ jsxs("div", { className: "left-section", children: [
      /* @__PURE__ */ jsx3("div", { className: "logo", children: logoUrl && /* @__PURE__ */ jsx3("img", { src: logoUrl, alt: "logo" }) }),
      /* @__PURE__ */ jsx3("div", { className: "site-name", children: siteName })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "section", children: [
      /* @__PURE__ */ jsx3("span", { onClick: onStickerClick, className: "sticker", children: sticker }),
      /* @__PURE__ */ jsx3("span", { onClick, className: "feedback", children: feedBackText })
    ] })
  ] }) });
};

// src/assets/upvote.png
var upvote_default = "./upvote-WAND27C3.png";

// src/components/ArticleCard.tsx
import { Fragment as Fragment4, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var ArticleCard = ({ children, title, variant = "regular", next, prev, onPrev, onNext, onUpvote, id, upvotes, background }) => {
  const style = {
    "--color-background-article-card": background
  };
  const upvoteNum = Number.isFinite(upvotes) ? upvotes : 0;
  const formattedUpvotes = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  }).format(upvoteNum);
  return /* @__PURE__ */ jsx4(Fragment4, { children: /* @__PURE__ */ jsxs2("article", { className: `article-card ${variant}`, style, children: [
    /* @__PURE__ */ jsxs2("div", { className: "upvote-line", children: [
      /* @__PURE__ */ jsxs2("button", { type: "button", className: "upvotes", onClick: onUpvote, children: [
        /* @__PURE__ */ jsx4("img", { src: upvote_default, alt: "flower" }),
        /* @__PURE__ */ jsx4("span", { className: "upvote-count", children: formattedUpvotes })
      ] }),
      /* @__PURE__ */ jsx4("h3", { className: "title", children: title }),
      prev && /* @__PURE__ */ jsx4("button", { type: "button", className: "prev", "aria-label": "previous", onClick: onPrev, children: "\u25C0 prev" }),
      next && /* @__PURE__ */ jsx4("button", { type: "button", className: "next", "aria-label": "next", onClick: onNext, children: "next \u25B6" })
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "article", children })
  ] }) });
};

// src/assets/flag.png
var flag_default = "./flag-LQ6RO2CQ.png";

// src/assets/upvote-flower.png
var upvote_flower_default = "./upvote-flower-EVU3NSFT.png";

// src/components/Comment.tsx
import { Fragment as Fragment5, jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var Comment = ({ id, content, onUpvote, onFlag, flagged = false, upvotes }) => {
  const formattedUpvotes = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  }).format(upvotes);
  return /* @__PURE__ */ jsx5(Fragment5, { children: /* @__PURE__ */ jsxs3("article", { className: "comment", children: [
    /* @__PURE__ */ jsxs3("button", { type: "button", className: "upvote", onClick: onUpvote, children: [
      /* @__PURE__ */ jsx5("img", { src: upvote_flower_default, alt: "flower" }),
      /* @__PURE__ */ jsx5("span", { className: "upvote-count", children: formattedUpvotes })
    ] }),
    /* @__PURE__ */ jsx5("p", { className: "comment-content", children: content }),
    /* @__PURE__ */ jsx5("button", { type: "button", className: "flag-button", "aria-label": "flag comment", onClick: onFlag, children: /* @__PURE__ */ jsx5("img", { src: flag_default, alt: "flag" }) })
  ] }) });
};

// src/components/CommentBar.tsx
import { Fragment as Fragment6, jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var CommentBar = ({ onClick, onFlag, onUpvote, flagged, comment, variant = "regular", button }) => {
  return /* @__PURE__ */ jsx6(Fragment6, { children: /* @__PURE__ */ jsxs4("article", { className: `comment-bar ${variant}`, children: [
    /* @__PURE__ */ jsx6(
      Comment,
      {
        id: comment.id,
        content: comment.content,
        onFlag,
        onUpvote,
        flagged,
        upvotes: comment.upvotes
      }
    ),
    /* @__PURE__ */ jsx6("button", { type: "button", className: "button", "aria-label": "comment bar button", onClick, children: button })
  ] }) });
};

// src/components/CommentBox.tsx
import { Fragment as Fragment7, jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var CommentBox = ({ content, onChange, onClick, send }) => {
  return /* @__PURE__ */ jsx7(Fragment7, { children: /* @__PURE__ */ jsxs5("div", { className: "comment-box", children: [
    /* @__PURE__ */ jsx7("textarea", { placeholder: "type here to comment .........", value: content, onChange: (e) => onChange(e.target.value), className: "comment-text" }),
    /* @__PURE__ */ jsx7("button", { type: "button", className: "post-comment", "aria-label": "comment", onClick, children: send })
  ] }) });
};

// src/components/CommentsModal.tsx
import { Fragment as Fragment8, jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var CommentsModal = ({ onUpvote, onFlag, onChange, onCommentClick, onClick, comments, commentBox, numberOfComments, variant = "regular", backButton }) => {
  return /* @__PURE__ */ jsx8(Fragment8, { children: /* @__PURE__ */ jsx8("div", { className: "overlay", children: /* @__PURE__ */ jsxs6("div", { className: `comments-modal ${variant}`, children: [
    /* @__PURE__ */ jsxs6("div", { className: "line", children: [
      /* @__PURE__ */ jsx8("button", { type: "button", className: "back-button", "aria-label": "back button", onClick, children: backButton }),
      /* @__PURE__ */ jsxs6("h3", { className: "comments", children: [
        "Comments ",
        numberOfComments
      ] })
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "comment-list", children: comments.map((comment) => /* @__PURE__ */ jsx8(
      Comment,
      {
        id: comment.id,
        content: comment.content,
        upvotes: comment.upvotes,
        onFlag: () => onFlag?.(comment.id),
        onUpvote: () => onUpvote?.(comment.id)
      },
      comment.id
    )) }),
    /* @__PURE__ */ jsx8("div", { className: "comment-box-container", children: /* @__PURE__ */ jsx8(CommentBox, { content: commentBox.content, onChange, onClick: onCommentClick, send: commentBox.send }) })
  ] }) }) });
};

// src/components/FeedBackModal.tsx
import { useEffect, useRef } from "react";
import { Fragment as Fragment9, jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var FeedBackModal = ({ onClick, onClose, email, send, suggestion, onEmailChange, onFeedBackChange }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return /* @__PURE__ */ jsx9(Fragment9, { children: /* @__PURE__ */ jsx9("div", { className: "feedback-modal-backdrop", children: /* @__PURE__ */ jsxs7("div", { className: "feedback-modal", ref: modalRef, children: [
    /* @__PURE__ */ jsx9("label", { htmlFor: "email", children: "email id" }),
    /* @__PURE__ */ jsx9("input", { id: "email", title: "email", type: "email", value: email, onChange: (e) => onEmailChange(e.target.value), placeholder: "" }),
    /* @__PURE__ */ jsx9("label", { htmlFor: "suggestion", children: "suggestion" }),
    /* @__PURE__ */ jsx9("textarea", { id: "suggestion", title: "suggestion", value: suggestion, onChange: (e) => onFeedBackChange(e.target.value), placeholder: "" }),
    /* @__PURE__ */ jsx9("button", { type: "button", className: "feedback-button", "aria-label": "feedback", onClick, children: send })
  ] }) }) });
};

// src/components/FlagModal.tsx
import React2, { useEffect as useEffect2 } from "react";
import { Fragment as Fragment10, jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var FlagReason = /* @__PURE__ */ ((FlagReason2) => {
  FlagReason2[FlagReason2["SPAM"] = 0] = "SPAM";
  FlagReason2[FlagReason2["DISRESPECT"] = 1] = "DISRESPECT";
  FlagReason2[FlagReason2["HATE_SPEECH"] = 2] = "HATE_SPEECH";
  FlagReason2[FlagReason2["HARASSMENT"] = 3] = "HARASSMENT";
  FlagReason2[FlagReason2["MISINFORMATION"] = 4] = "MISINFORMATION";
  FlagReason2[FlagReason2["VULGAR"] = 5] = "VULGAR";
  FlagReason2[FlagReason2["OTHER"] = 6] = "OTHER";
  return FlagReason2;
})(FlagReason || {});
var FlagModal = ({ open, reasonOptions, onSubmit, onClose }) => {
  const reasons = reasonOptions ?? Object.values(FlagReason).filter((value) => typeof value === "number");
  const [selectedReason, setSelectedReason] = React2.useState(null);
  useEffect2(() => {
    if (!open) {
      setSelectedReason(null);
    }
  }, [open]);
  if (!open) return null;
  const handleSubmit = () => {
    if (!selectedReason) return;
    onSubmit?.(selectedReason);
  };
  const handleSelect = (reason) => {
    setSelectedReason(reason);
  };
  return /* @__PURE__ */ jsx10(Fragment10, { children: /* @__PURE__ */ jsx10("div", { className: "flag-modal-backdrop", onClick: onClose, children: /* @__PURE__ */ jsxs8("div", { role: "dialog", "aria-labelledby": "flag-modal-title", className: "flag-modal", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsx10("div", { className: "close-button", "aria-label": "close-flag-modal", onClick: onClose, children: "x" }),
    /* @__PURE__ */ jsx10("h2", { className: "flag-modal-title", id: "flag-modal-title", children: "Flagging reason" }),
    /* @__PURE__ */ jsx10("div", { className: "flag-modal-divider" }),
    /* @__PURE__ */ jsx10("ul", { role: "list", children: reasons.map((reason) => /* @__PURE__ */ jsx10("li", { role: "listitem", children: /* @__PURE__ */ jsx10("button", { type: "button", className: selectedReason === reason ? "selected" : "", onClick: () => handleSelect(reason), children: FlagReason[reason] }) }, reason)) }),
    /* @__PURE__ */ jsx10("button", { type: "button", className: "submit-flag", disabled: !selectedReason, onClick: handleSubmit, children: "Flag" })
  ] }) }) });
};

// src/components/Loader.tsx
import { useEffect as useEffect3, useState } from "react";
import { Fragment as Fragment11, jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var Loader = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect3(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return /* @__PURE__ */ jsxs9(Fragment11, { children: [
    /* @__PURE__ */ jsx11("div", { className: "loader", children: /* @__PURE__ */ jsxs9("div", { className: "sparkles", children: [
      /* @__PURE__ */ jsx11("span", { className: "sparkle small s1" }),
      /* @__PURE__ */ jsx11("span", { className: "sparkle small s2" }),
      /* @__PURE__ */ jsx11("span", { className: "sparkle small s3" }),
      /* @__PURE__ */ jsx11("span", { className: "sparkle small s4" }),
      /* @__PURE__ */ jsx11("span", { className: "sparkle small s5" }),
      /* @__PURE__ */ jsx11("span", { className: "sparkle mid one" })
    ] }) }),
    /* @__PURE__ */ jsx11("div", { className: "loading-text", style: { left: pos.x, top: pos.y }, children: "loading..." })
  ] });
};
export {
  ArticleCard,
  Button,
  Comment,
  CommentBar,
  CommentBox,
  CommentsModal,
  FeedBackModal,
  FlagModal,
  FlagReason,
  Loader,
  NavBar,
  StickerBar
};
