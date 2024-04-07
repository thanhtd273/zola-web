import React, { useState } from "react";
import Search from "../../components/common/Search";
import { CONTACT_CATEGORY } from "../../constants";
import classNames from "classnames";
import Modal from "../../components/common/Modal";
import CreateGroup from "./CreateGroup";

const ContactPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(CONTACT_CATEGORY[0]);
  const [isAddFriend, setIsAddFriend] = useState(false);
  const [isCreateGroup, setIsCreateGroup] = useState(false);

  const handleCancelAddFriend = () => {
    setIsAddFriend(false);
  };

  const handleCancelCreateGroup = () => {
    setIsCreateGroup(false);
  };

  return (
    <>
      <div className="panel-container">
        <Search
          onAddFriend={() => setIsAddFriend(true)}
          onAddGroup={() => setIsCreateGroup(true)}
        />
        <div className="menu-contact">
          {CONTACT_CATEGORY.map((item, index) => (
            <div
              className={classNames("menu-item flx middle-flex", {
                selected: item.value === selectedMenu.value,
              })}
              onClick={() => setSelectedMenu(item)}
            >
              <p className="menu-name">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <main>
        <div className="contact-pages page-container">
          <div className="head__page__contact__tab flx middle-flex">
            <span>{selectedMenu.label}</span>
          </div>
          <div className="card-list-wrapper">
            <div className="list" style={{ position: "relative" }}>
              <div
                style={{ overflow: "visible", height: "0px", height: "0px" }}
              >
                <div
                  className="card-list-title flx middle-flex"
                  style={{
                    height: "64px",
                    position: "absolute",
                    top: "0px",
                    width: "100%",
                  }}
                >
                  Contacts (41)
                </div>
                <div className="contact-filter-container">
                  <div className="contact-filter-wrapper">
                    <div className="filter"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Modal
        visible={isAddFriend}
        title="Add friend"
        okLabel="Search"
        disable
        width="400px"
        onCancel={handleCancelAddFriend}
      >
        Modal content
      </Modal>
      <CreateGroup
        isCreateGroup={isCreateGroup}
        onCancel={handleCancelCreateGroup}
      />
    </>
  );
};

export default ContactPage;
