import React from "react";

const Checkbox = ({ checked = false, onChange }) => {
  return (
    <div>
      {checked ? (
        <i
          className="fa-solid fa-circle-check"
          style={{
            color: "#0068ff",
          }}
        ></i>
      ) : (
        <i className="fa-regular fa-circle" style={{ color: "#c0bfbc" }}></i>
      )}
    </div>
  );
};

export default Checkbox;
