import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { OverlayPanel } from "primereact/overlaypanel";

import ConversationPreview from "./ConversationPreview";
import * as APIs from "../../constants/APIs";
import { getCacheData } from "../../utils/helper";
import { AUTH_TOKEN } from "../../constants";

const ConversationList = () => {
  const actionRef = useRef(null);
  const [data, setData] = useState([]);

  const token = getCacheData(AUTH_TOKEN);

  // useEffect(() => {
  //   axios({
  //     url: APIs.MY_CONVERSATION,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => {
  //       setData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const onClickAction = (e) => actionRef.current?.toggle(e);

  const renderItem = (item, key) => {
    return <ConversationPreview data={item} key={`conversation_${key}_`} />;
  };
  return (
    <div>
      <div className="row space-between conversation-filter p-4">
        <div className="row tab-main gap-2">
          <div className="selected tab-item ">
            <span>Focused</span>
          </div>
          <div className="tab-item">
            <span>Other</span>
          </div>
        </div>
        <div className="row filter-types ">
          <div className="center gap-2 label-filter-preview filter-preview-v2">
            <span>Labels</span>
            <i className="pi pi-chevron-down" />
          </div>
          <div className="icon icon-option center" onClick={onClickAction}>
            <span>
              <i className="pi pi-ellipsis-h" />
            </span>
          </div>
          <OverlayPanel ref={actionRef} className="popover-v3">
            <div>Mark as read</div>
            <div>Switch to classic design</div>
          </OverlayPanel>
        </div>
      </div>
      <div id="conversation-list" style={{ height: "100%" }}>
        <div style={{ overflow: "visible", height: 0, width: 0 }}>
          <div className="virtualized-scroll">
            <div className="inner-vir-scroll">
              <div className="scroll">
                <div className="grip-inner-scroll-container">
                  {data?.map((item, index) => renderItem(item, index))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OverlayPanel ref={actionRef} className="popover-v3">
        <div>Mark as read</div>
        <div>Switch to classic design</div>
      </OverlayPanel>
    </div>
  );
};

export default ConversationList;
