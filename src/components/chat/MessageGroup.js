import React from "react";
import Message from "./Message";

const data = [
  {
    ownerId: 4,
    ownerName: "Đình Phúc",
    content: "rứa làm năm sau kị hai người luôn à rứa làm năm sau kị hai",
    createDate: "4:20",
  },
  {
    ownerId: 3,
    ownerName: "Trịnh Đình Thạnh",
    content: "test",
    createDate: "4:21",
  },
  {
    ownerId: 4,
    ownerName: "Đình Phúc",
    content: "test 2",
    createDate: "4:20",
  },
];

const MessageGroup = () => {
  return (
    <div className="col">
      <div className="chat-date --time island center">
        <span className="content">
          <span>Thu 22/02/2024</span>
        </span>
      </div>
      {data?.map((item, index) => (
        <Message key={`message_item_${index}`} data={item} />
      ))}
    </div>
  );
};

export default MessageGroup;
