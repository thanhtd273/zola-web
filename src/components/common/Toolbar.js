import React from "react";

const Toolbar = () => {
  return (
    <div id="toolbar" className="chat-input-v2 row">
      <div className="btn-icon center">
        <i
          className="fa-regular fa-note-sticky"
          style={{ fontSize: "1.5rem" }}
        ></i>
      </div>
      <div className="btn-icon center">
        <i className="pi pi-image" style={{ fontSize: "1.5rem" }} />
      </div>
      <div className="btn-icon center">
        <i className="pi pi-paperclip" style={{ fontSize: "1.5rem" }} />
      </div>
      <div className="btn-icon center">
        <i className="pi pi-id-card" style={{ fontSize: "1.5rem" }} />
      </div>

      <div className="btn-icon center">
        <i className="pi pi-stopwatch" style={{ fontSize: "1.5rem" }} />
      </div>

      <div className="btn-icon center">
        <i className="pi pi-check-square" style={{ fontSize: "1.5rem" }} />
      </div>

      <div className="btn-icon center">
        <i className="pi pi-pencil" style={{ fontSize: "1.5rem" }} />
      </div>

      <div className="btn-icon center">
        <i className="pi pi-info" style={{ fontSize: "1.5rem" }} />
      </div>

      <div className="btn-icon center">
        <i className="pi pi-ellipsis-h" style={{ fontSize: "1.5rem" }} />
      </div>
    </div>
  );
};

export default Toolbar;
