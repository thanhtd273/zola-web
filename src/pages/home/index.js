import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PREFIX } from "../../constants/Global";
import { getCacheData } from "../../utils/helper";
import * as CONSTANTS from "../../constants";
import SideBar from "../../components/common/SideBar";
import ChatPage from "../../pages/chat";
import ContactPage from "../contact";
import TaskPage from "../task";

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

  const renderContent = () => {
    if (activeTab === 1) return <ChatPage />;
    switch (activeTab) {
      case 1:
        return <ChatPage />;
      case 2:
        return <ContactPage />;
      case 3:
        return <TaskPage />;
      default:
        break;
    }
  };

  if (!token) navigate(PREFIX + "/login");

  return (
    <div id="container">
      <div className="row">
        <SideBar activeTab={activeTab} onChange={onChangeTab} />
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;
