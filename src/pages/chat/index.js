import React from "react";
import Search from "../../components/common/Search";
import ConversationList from "../../components/conversation/ConversationList";
import Header from "../../components/common/Header";
import ChantContainer from "../../components/chat";

const data = {
  name: "Nhà miềng",
  avatar:
    "https://s120-ava-talk.zadn.vn/d/e/1/c/13/120/545e4fc56c05782e18fa0f7d81bd162c.jpg",
  members: 6,
};

const ChatPage = () => {
  return (
    <>
      <div className="panel-container">
        <Search />
        <ConversationList />
      </div>
      <main>
        <div className="main__center amimated col">
          <Header data={data} />
          <ChantContainer />
        </div>
      </main>
    </>
  );
};

export default ChatPage;
