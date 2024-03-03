import { classNames } from "primereact/utils";
import React, { useState } from "react";

const ChatInput = () => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="chat-input">
      <div
        className={classNames("chat-input__content", { highlight: focused })}
      >
        <div className="chat-input__content__input row">
          <div className="flx input-bar">
            <div className="chat-input-container">
              <input
                className="rich-input"
                placeholder="@, Message Ả Liên"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </div>
          </div>
          <div className="row input-action-group">
            <div className="btn-icon center">
              <i className="fa-regular fa-message fa-xl"></i>
            </div>
            <div className="btn-icon center">
              <i className="fa-regular fa-face-smile fa-xl"></i>
            </div>
            <div className="btn-icon center">
              <i className="fa-solid fa-at fa-xl"></i>
            </div>
            <div className="btn-icon">👍</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
