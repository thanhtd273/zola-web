import { Avatar } from "primereact/avatar";
import React from "react";

const Header = ({ data }) => {
  return (
    <header id="header row">
      <div className="row chat-info">
        <Avatar
          image="https://s120-ava-talk.zadn.vn/d/e/1/c/13/120/545e4fc56c05782e18fa0f7d81bd162c.jpg"
          shape="circle"
          size="large"
          style={{ border: "1px solid white" }}
        />
        <div className="chat-title">
          <div className="header-title">{data.name}</div>
          <div className="row">
            <div className="row">
              <i
                className="pi pi-user"
                style={{ fontSize: "1.123rem", margin: "0px 4px 0px 0px" }}
              />
              <div>{data.members} members</div>
            </div>
            <div className="new-separator" />
            <div>
              <i className="pi pi-tag label-ico-header" />
            </div>
          </div>
        </div>
      </div>
      <div className="row group-action">
        <div className="icon">
          <i className="pi pi-user-plus" style={{ fontSize: "1.25rem" }} />
        </div>
        <div className="icon">
          <i className="pi pi-search" style={{ fontSize: "1.25rem" }} />
        </div>
        <div className="icon">
          <i className="pi pi-camera" style={{ fontSize: "1.25rem" }} />
        </div>
        <div className="icon">
          <i className="pi pi-bars" style={{ fontSize: "1.25rem" }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
