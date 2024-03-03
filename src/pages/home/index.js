import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PREFIX } from "../../constants/Global";
import { getCacheData } from "../../utils/helper";
import * as CONSTANTS from "../../constants";
import ConversationList from "../../components/conversation/ConversationList";
import Search from "../../components/common/Search";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/Header";
import ChatContainer from "../../components/chat";

const data = {
  name: "Nhà miềng",
  avatar:
    "https://s120-ava-talk.zadn.vn/d/e/1/c/13/120/545e4fc56c05782e18fa0f7d81bd162c.jpg",
  members: 6,
};

const Index = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [token, setToken] = useState(getCacheData(CONSTANTS.AUTH_TOKEN));
  const navigate = useNavigate();

  const onChangeTab = (value) => {
    setActiveTab(value);
  };

  useEffect(() => {
    if (!token) {
      return navigate(PREFIX + "/login");
    }
    setToken(getCacheData(CONSTANTS.AUTH_TOKEN));
  }, [token]);

  const renderPanel = () => {
    if (activeTab === 1) return <ConversationList />;
  };

  const renderContent = () => {
    if (activeTab === 1) return;
  };

  return (
    <div id="container">
      <div className="row">
        <SideBar activeTab={activeTab} onChange={onChangeTab} />
        <div className="panel-container">
          <Search />
          {renderPanel()}
        </div>
        <main>
          <div className="main__center animated col">
            <Header data={data} />
            <ChatContainer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
