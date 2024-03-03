import React from "react";

const IconButton = ({ icon, onClick }) => {
  return (
    <div className="btn-icon" onClick={onClick}>
      <i className={icon} style={{ fontSize: "1.25rem" }} />
    </div>
  );
};

export default IconButton;
