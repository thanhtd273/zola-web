import React from "react";
import Button from "./Button";
import { BTN_TYPE } from "../../constants";

const Modal = ({
  visible,
  title,
  cancelLabel = "Cancel",
  okLabel = "OK",
  disable = false,
  children,
  width = "520px",
  style = {},
  onSummit = () => {},
  onCancel = () => {},
}) => {
  return (
    visible && (
      <div className="zl-modal fadeIn animated" style={{ zIndex: 100 }}>
        <div className="zl-modal__container flx-1 center ovf-hidden">
          <div
            className="zl-modal__dialog flx flx-col animated zoomIn no-border"
            style={{
              alignSelf: "flex-start",
              position: "relative",
              width: width,
              top: "45.5px",
              flexFlow: "column nowrap",
              ...style,
            }}
          >
            <div className="zl-modal__dialog__header flx flx-sp-btw">
              <div className="flx flx-al-c flx-1 between-flex truncate">
                <div className="truncate">
                  <span className="zl-modal__dialog__header__title-text truncate">
                    {title}
                  </span>
                  <div style={{ marginTop: "2px" }}></div>
                </div>
                <div
                  className="z--btn--v2 btn-tertiary-neutral medium modal-header-icon --full-rounded icon-only modal-header-icon"
                  onClick={onCancel}
                >
                  <i className="fa fa-close f16 pre" />
                </div>
              </div>
            </div>
            <div className="zl-modal__dialog-body  no-padding  free-height ">
              <div className="flx flx-col flx-1">
                <div
                  className="stack-navigation"
                  style={{
                    height: "448px",
                    maxHeight: "448px",
                    transitionDuration: "0ms",
                  }}
                >
                  <div className="stack-page">
                    <div style={{ padding: "16px" }}>{children}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pi-footer-section">
              <Button
                type={BTN_TYPE.NEUTRAL}
                label={cancelLabel}
                onClick={onCancel}
              />
              <Button label={okLabel} onClick={onSummit} disabled={disable} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
