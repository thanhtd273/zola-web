import React from "react";
import { INPUT_APPEARANCE } from "../../constants";
import classNames from "classnames";

const Input = ({
  showSearchIcon = true,
  className = "",
  appearance = INPUT_APPEARANCE.TEXT,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <span
      className={classNames(`zl-group-input zl-group-input__lg ${className}`, {
        "zl-group-input__appearance--rounded":
          appearance === INPUT_APPEARANCE.ROUNDED,
        "zl-group-input__appearance--text":
          appearance === INPUT_APPEARANCE.TEXT,
      })}
    >
      {showSearchIcon && (
        <i className="fa-solid fa-magnifying-glass zl-group-input__affix-wrapper__prefix-icon"></i>
      )}
      <input
        className="zl-input  zl-group-input__affix-wrapper__prefix "
        placeholder={placeholder}
        value={value}
        style={{ paddingLeft: showSearchIcon && "32px" }}
        onChange={onChange}
      />
    </span>
  );
};

export default Input;
