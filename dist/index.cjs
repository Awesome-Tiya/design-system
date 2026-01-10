"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ArticleCard: () => ArticleCard,
  Button: () => Button,
  Comment: () => Comment,
  CommentBar: () => CommentBar,
  CommentBox: () => CommentBox,
  CommentsModal: () => CommentsModal,
  FeedBackModal: () => FeedBackModal,
  FlagModal: () => FlagModal,
  FlagReason: () => FlagReason,
  NavBar: () => NavBar
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ children, variant = "primary", onClick }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: `custom-button ${variant}`, onClick, children }) });
};

// src/components/NavBar.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var NavBar = ({ children, logoUrl, color = "#daf6e7", variant = "regular", siteName, feedBackText = "suggestion" }) => {
  const style = {
    "--color-navbar": color
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: `navbar ${variant}`, style, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "left-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "logo", children: logoUrl && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: logoUrl, alt: "logo" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "site-name", children: siteName })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "feedback", children: feedBackText })
  ] }) });
};

// src/assets/upvote.png
var upvote_default = "./upvote-WAND27C3.png";

// src/components/ArticleCard.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  console.log("\u2705 DESIGN SYSTEM UPDATED ArticleCard running", upvotes);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("article", { className: `article-card ${variant}`, style, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "upvote-line", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "upvotes", onClick: onUpvote, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: upvote_default, alt: "flower" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "upvote-count", children: formattedUpvotes })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "title", children: title }),
      prev && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "prev", "aria-label": "previous", onClick: onPrev, children: "\u25C0 prev" }),
      next && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "next", "aria-label": "next", onClick: onNext, children: "next \u25B6" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "article", children })
  ] }) });
};

// src/assets/flag.png
var flag_default = "./flag-LQ6RO2CQ.png";

// src/assets/upvote-flower.png
var upvote_flower_default = "./upvote-flower-EVU3NSFT.png";

// src/components/Comment.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Comment = ({ id, content, onUpvote, onFlag, flagged = false, upvotes }) => {
  const formattedUpvotes = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2
  }).format(upvotes);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("article", { className: "comment", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", className: "upvote", onClick: onUpvote, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: upvote_flower_default, alt: "flower" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "upvote-count", children: formattedUpvotes })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "comment-content", children: content }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: "flag-button", "aria-label": "flag comment", onClick: onFlag, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: flag_default, alt: "flag" }) })
  ] }) });
};

// src/components/CommentBar.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var CommentBar = ({ onClick, comment, variant = "regular", button }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("article", { className: `comment-bar ${variant}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Comment,
      {
        id: comment.id,
        content: comment.content,
        upvotes: comment.upvotes
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: "button", "aria-label": "comment bar button", onClick, children: button })
  ] }) });
};

// src/components/CommentBox.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var CommentBox = ({ content, onChange, onClick, send }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "comment-box", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("textarea", { placeholder: "type here to comment .........", value: content, onChange: (e) => onChange(e.target.value), className: "comment-text" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: "post-comment", "aria-label": "comment", onClick, children: send })
  ] }) });
};

// src/components/CommentsModal.tsx
var import_react = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var CommentsModal = ({ onUpvote, onFlag, onChange, onCommentClick, onClick, comments, commentBox, numberOfComments, variant = "regular", backButton }) => {
  const [commentList, setCommentList] = import_react.default.useState(comments);
  (0, import_react.useEffect)(() => {
    setCommentList(comments);
  }, [comments]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: `comments-modal ${variant}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "line", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "back-button", "aria-label": "back button", onClick, children: backButton }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h3", { className: "comments", children: [
        "Comments ",
        numberOfComments
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "comment-list", children: commentList.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Comment,
      {
        id: comment.id,
        content: comment.content,
        upvotes: comment.upvotes,
        onFlag,
        onUpvote
      },
      comment.id
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "comment-box-container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CommentBox, { content: commentBox.content, onChange, onClick: onCommentClick, send: commentBox.send }) })
  ] }) });
};

// src/components/FeedBackModal.tsx
var import_react2 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var FeedBackModal = ({ onClick, onClose, email, send, suggestion, onEmailChange, onFeedBackChange }) => {
  const modalRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "feedback-modal-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "feedback-modal", ref: modalRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { htmlFor: "email", children: "email id" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", { id: "email", title: "email", type: "email", value: email, onChange: (e) => onEmailChange(e.target.value), placeholder: "" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { htmlFor: "suggestion", children: "suggestion" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("textarea", { id: "suggestion", title: "suggestion", value: suggestion, onChange: (e) => onFeedBackChange(e.target.value), placeholder: "" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { type: "button", className: "feedback-button", "aria-label": "feedback", onClick, children: send })
  ] }) }) });
};

// src/components/FlagModal.tsx
var import_react3 = __toESM(require("react"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  const [selectedReason, setSelectedReason] = import_react3.default.useState(null);
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flag-modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { role: "dialog", "aria-labelledby": "flag-modal-title", className: "flag-modal", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "close-button", "aria-label": "close-flag-modal", onClick: onClose, children: "x" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "flag-modal-title", id: "flag-modal-title", children: "Flagging reason" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flag-modal-divider" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("ul", { role: "list", children: reasons.map((reason) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("li", { role: "listitem", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: selectedReason === reason ? "selected" : "", onClick: () => handleSelect(reason), children: FlagReason[reason] }) }, reason)) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: "submit-flag", disabled: !selectedReason, onClick: handleSubmit, children: "Flag" })
  ] }) }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArticleCard,
  Button,
  Comment,
  CommentBar,
  CommentBox,
  CommentsModal,
  FeedBackModal,
  FlagModal,
  FlagReason,
  NavBar
});
