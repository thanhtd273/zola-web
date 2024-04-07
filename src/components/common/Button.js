import React from "react";
import { BTN_TYPE, INPUT_APPEARANCE } from "../../constants";
import classNames from "classnames";

const Button = ({
  label,
  type = BTN_TYPE.PRIMARY,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <div
      data-disabled={disabled && "disabled"}
      className={classNames(
        `z--btn--v2 large center`,
        type === BTN_TYPE.PRIMARY ? "btn-primary" : "btn-neutral"
      )}
      onClick={onClick}
    >
      <div className="truncate">{label}</div>
    </div>
  );
};

export default Button;
