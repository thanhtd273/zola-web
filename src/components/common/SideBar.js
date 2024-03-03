import React from "react";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import ZAvatar from "./ZAvatar";

const SideBar = ({ activeTab = 1, onChange }) => {
  const TABs = [
    {
      key: 1,
      title: "Messages",
      value: 1,
      icon: "pi pi-comment",
    },
    {
      key: 2,
      title: "Contacts",
      value: 2,
      icon: "pi pi-id-card",
    },
    {
      key: 3,
      title: "Messages",
      value: 3,
      icon: "pi pi-check-square",
    },
    {
      key: 4,
      title: "Messages",
      value: 4,
      icon: "pi pi-cloud",
    },
    {
      key: 5,
      title: "Messages",
      value: 5,
      icon: "pi pi-briefcase",
    },
    {
      key: 6,
      title: "Messages",
      value: 6,
      icon: "pi pi-cog",
    },
  ];

  return (
    <nav id="sidebar-nav">
      <div id="main-tab">
        <div className="nav-tabs-bottom">
          <div className="nav__tabs__zola">
            <ZAvatar image="https://s120-ava-talk.zadn.vn/2/a/3/7/3/120/014beaa7953093ae5bf2ca3b1a5f062b.jpg" />
          </div>

          {TABs.splice(0, 3).map((item) => (
            <div
              key={item.key}
              className={classNames({
                "nav-btn-container": true,
                "tab-selected": activeTab === item.value,
              })}
              title={item.title}
              onClick={() => onChange(item.value)}
            >
              <Button className="nav-btn" severity="info" aria-label="User">
                <i className={`${item.icon} nav-btn-icon`} />
              </Button>
            </div>
          ))}
        </div>
        <div className="nav-tabs-bottom">
          {TABs.splice(0, 3).map((item) => (
            <div
              key={item.key}
              className={classNames({
                "nav-btn-container": true,
                "tab-selected": activeTab === item.value,
              })}
              title={item.title}
              onClick={() => onChange(item.value)}
            >
              <Button className="nav-btn" severity="info" aria-label="User">
                <i className={`${item.icon} nav-btn-icon`} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
