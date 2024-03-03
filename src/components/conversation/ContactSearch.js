import React from "react";

import { InputText } from "primereact/inputtext";

const ConversationSearch = () => {
  return (
    <div id="contact-search" className="center space-around">
      <div className="group-search grid-item">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            id="contact-search-input"
            placeholder="Search"
            className="p-inputtext-sm"
            maxLength={100}
          />
        </span>
      </div>

      <div className="icon-group">
        <span className="contact-icon center">
          <i className="pi pi-user-plus icon" />
        </span>
        <span className="contact-icon center">
          <i className="pi pi-users icon" />
        </span>
      </div>
    </div>
  );
};

export default ConversationSearch;
