import { Avatar } from "primereact/avatar";
import React from "react";

import { getCacheData } from "../../utils/helper";
import { classNames } from "primereact/utils";

const Message = ({ data }) => {
  const currentUser = getCacheData();
  const isCurrentUser = data?.ownerId === currentUser.userId;
  return (
    <div
      className={classNames({
        "chat-item flx": true,
        "flex-end": isCurrentUser,
      })}
    >
      {!isCurrentUser && (
        <Avatar
          shape="circle"
          image="https://s120-ava-talk.zadn.vn/2/a/3/7/3/120/014beaa7953093ae5bf2ca3b1a5f062b.jpg"
          size="large"
          style={{ border: "1px solid white" }}
        />
      )}
      <div className="chat-content flx">
        <div className="chat-message wrap-message rotate-container -send-time -reaction bubble-jump-target">
          <div
            className={classNames({
              "col card card--text ": true,
              me: isCurrentUser,
            })}
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            {!isCurrentUser && (
              <div className="card-sender-name">{data?.ownerName}</div>
            )}
            <div>
              <span className="card-content">
                <span className="text">
                  rứa làm năm sau kị hai người luôn à rứa làm năm sau kị hai
                </span>
              </span>
            </div>
            <div style={{ marginTop: "10px" }}>
              <div className="card-sender-time">
                <span className="card-send-time__sendTime ">
                  {data?.createDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
