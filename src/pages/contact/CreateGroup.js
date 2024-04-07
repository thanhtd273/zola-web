import React, { useState } from "react";

import Modal from "../../components/common/Modal";
import Input from "../../components/common/Input";
import { INPUT_APPEARANCE, MAX_CONVERSATION_MEMBER } from "../../constants";
import classNames from "classnames";
import { List } from "react-virtualized";
import Checkbox from "../../components/common/Checkbox";
import ZAvatar from "../../components/common/ZAvatar";

const SAMPLE_TAGS = [
  {
    tagId: 0,
    name: "All",
    color: "",
  },
  {
    tagId: 1,
    name: "Gia đình",
    color: "",
  },
  {
    tagId: 2,
    name: "Khách hàng",
    color: "",
  },
  {
    tagId: 3,
    name: "Công việc",
    color: "",
  },
  {
    tagId: 6,
    name: "Bạn bè",
    color: "",
  },
  {
    tagId: 4,
    name: "Trả lời sau",
    color: "",
  },
  {
    tagId: 5,
    name: "Đồng nghiệp",
    color: "",
  },
];

const SAMPLE_CONTACT = [
  {
    userId: 1,
    contactName: "Ả Liên",
    labelId: 1,
    avatar: "",
  },
  {
    userId: 1,
    contactName: "Anh Trung",
    labelId: 1,
    avatar:
      "https://s120-ava-talk.zadn.vn/0/e/b/2/7/120/2076a5fa29d42a88ad8fee0eea761ae0.jpg",
  },
  {
    userId: 1,
    contactName: "Vượng",
    labelId: 1,
    avatar:
      "https://s120-ava-talk.zadn.vn/0/e/b/2/7/120/2076a5fa29d42a88ad8fee0eea761ae0.jpg",
  },
  {
    userId: 1,
    contactName: "Linh",
    labelId: 1,
    avatar:
      "https://s120-ava-talk.zadn.vn/b/f/7/4/119/120/a5e156da73e6aefac6cd7b57d3c213a8.jpg",
  },
  {
    userId: 1,
    contactName: "Anh Tô",
    labelId: 1,
    avatar:
      "https://s120-ava-talk.zadn.vn/2/3/d/7/1/120/cc5cb9e4e80dcddc5d436420ddaadb46.jpg",
  },
  {
    userId: 1,
    contactName: "Anh Tuấn Anh",
    labelId: 1,
    avatar:
      "https://s120-ava-talk.zadn.vn/9/b/6/3/20/120/aaa972d2ec49521a6d12d5eebab41a26.jpg",
  },
];

const rowCount = 5000;
const listHeight = 500;
const rowHeight = 50;
const rowWidth = 500;

const CreateGroup = ({ isCreateGroup, onCancel }) => {
  const [data, setData] = useState({ groupName: "", memberIds: "" });
  const [filter, setFilter] = useState({ phoneNumber: "", tagId: 0 });
  const [tags, setTags] = useState(SAMPLE_TAGS);
  const [contacts, setContacts] = useState(SAMPLE_CONTACT);
  const [selecteContacts, setSelectedContacts] = useState([]);

  const renderRow = ({ index, key, style }) => {
    const item = contacts[index];

    return (
      <div className="create-group__item-container">
        <div className="flx flx-al-c h100 create-group__item">
          <Checkbox checked />
          <div className="rel create-group__item__avatar">
            <ZAvatar image={item.avatar} />
          </div>
          <div className="flx flx-col flx-1 mr-8">
            <div className="create-group__item__name center">
              {item.contactName}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal
      visible={isCreateGroup}
      title="Create group"
      okLabel="Create group"
      width="520px"
      onCancel={onCancel}
    >
      <div className="row">
        <div className="create-group__avatar cursor-point flx center">
          <i class="fa-solid fa-camera" style={{ color: "#7589a3" }}></i>
        </div>
        <Input showSearchIcon={false} placeholder="Enter group name..." />
      </div>
      <Input
        appearance={INPUT_APPEARANCE.ROUNDED}
        placeholder="Enter name, phone number or list of phone number here"
      />
      <div className="rel w100">
        <div className="create-group__tags-wrapper">
          <div className="create-group__tags-containter">
            <div className="flx align-center create-group__tags rel">
              {tags.map((tag, index) => (
                <div className="cg-tag">
                  <div
                    className={classNames("chips chips--choice --m", {
                      "--active": filter.tagId === tag.tagId,
                    })}
                    onClick={() => setFilter({ ...filter, tagId: tag.tagId })}
                  >
                    <div className="flx-1 truncate">{tag.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flx-1 flx create-group__list">
        <div className="flx-1 rel">
          <div style={{ overflow: "visible", height: "0px", width: "0px" }}>
            <div
              className="virtualized-scroll"
              style={{ height: "300px", width: "488px" }}
            >
              <List
                width={rowWidth}
                height={listHeight}
                rowHeight={rowHeight}
                rowRenderer={renderRow}
                rowCount={contacts.length}
                overscanRowCount={3}
                style={{ position: "absolute" }}
              />
            </div>
          </div>
        </div>
        <div
          className={classNames("flx create-group__selected-section", {
            "no-item": selecteContacts.length === 0,
          })}
        >
          <div className="flx flx-col flx-1">
            <div className="create-group__selected-title flx align-center">
              Selected
              <div className="create-group__counter flx align-center">{`${selecteContacts.length}/${MAX_CONVERSATION_MEMBER}`}</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateGroup;
