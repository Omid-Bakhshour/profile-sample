import React from "react";
import ModalContainer from "./ModalContainer";
import { CgClose as CloseIcon } from "react-icons/cg";
import Text from "./Text";

function ModalProfileDetail({ title, item, setValue }) {
  return (
    <ModalContainer
      minWidthSize="560px"
      maxWidthSize="80vw"
      maxheightSize="80vh"
    >
      <div className="w-full flex flex-col px-2 gap-4  py-3">
        <div className="w-full flex items-center justify-between gap-2 pb-3  border-b border-gray-400 ">
          <p className="modal_title ">{title}</p>
          <CloseIcon
            onClick={() => setValue(false)}
            className="modal_closeIcon"
          />
        </div>
        {/* detail */}

        <div className="w-full flex flex-col gap-4 ">
          {/* name and lastname */}

          <div className="w-full flex gap-4 ">
            <Text title={"name:"} value={item?.name} />
            <Text title={"lastname:"} value={item?.last_name} />
          </div>

          <div className="w-full flex gap-4  ">
            <Text title={"email:"} value={item?.email} />
            <Text title={"role:"} value={item?.role} />

            <Text
              title={"department:"}
              value={item?.department?.name ? item?.department?.name : "-"}
            />
          </div>

          <div className="w-full flex gap-4">
            <Text title={"birthdate:"} value={item?.birthdate} />
            <Text title={"age:"} value={item?.age} />
          </div>

          <div className="w-full flex gap-4">
            <Text
              title={"address:"}
              value={item?.address?.address ? item?.address?.address : "-"}
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

export default ModalProfileDetail;
