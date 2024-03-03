import React from "react";
import ZAvatar from "../common/ZAvatar";
import { formatTime } from "../../utils/formater";

const ConversationPreview = ({ data }) => {
  return (
    <div className="msg-item">
      <div className="conv-item conv-rel gridv2">
        <div className="center flex-start">
          <ZAvatar image={data?.avatar} />
        </div>

        <div className="conv-content truncate">
          <div className="conv-title truncate">
            <div className="row">
              <div className="conv-name truncate">
                <span className="text-bold">{data?.name}</span>
              </div>
              <div className="conv-last-seen truncate">
                {formatTime(data?.lastSeenAt)}
              </div>
            </div>
            <div className="row conv-body truncate">
              <div className="conv-message conv-dbname truncate">
                {data.lastMessageSender}:
              </div>
              <div className="conv-message truncate">
                {data.lastMessage?.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPreview;
