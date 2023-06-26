import React from "react";

function ModalContainer({
  children,
  widthSize,
  minWidthSize,
  maxWidthSIze,
  heightSize,
  maxheightSize,
}) {
  return (
    <div className="modal_bg ">
      <div
        style={{
          width: widthSize,
          maxWidth: maxWidthSIze,
          height: heightSize,
          minWidth: minWidthSize,
          maxHeight: maxheightSize,
        }}
        className="modal_container"
      >
        {children}
      </div>

      <div className="modal_mobile">{children}</div>
    </div>
  );
}

export default ModalContainer;
