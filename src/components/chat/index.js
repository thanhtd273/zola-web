import React, { useState } from "react";
import MessageGroup from "./MessageGroup";
import Toolbar from "../common/Toolbar";
import ChatInput from "./ChatInput";

const Index = () => {
  return (
    <article>
      <div className="message-view">
        <div className="message-view__blur__overlay" />
        <div className="drag-over-overlay"></div>
        <div id="messageViewContainer" className="message-view__scroll">
          <div className="messsage-view__scroll_outer">
            <div className="message-view__scroll__inner">
              <MessageGroup />
            </div>
          </div>
        </div>

        <Toolbar />
        <ChatInput />
      </div>
    </article>
  );
};

export default Index;
