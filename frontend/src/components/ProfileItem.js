"use client";

import React, { useState } from "react";
import ModalProfileDetail from "./ModalProfileDetail";

function ProfileItem({ item }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <tr>
        <td>
          {showMore && (
            <ModalProfileDetail
              title={"Profile Detail"}
              setValue={setShowMore}
              item={item}
            />
          )}
        </td>
      </tr>
      <tr className="border-b border-gray-300 last:border-none">
        <td className="table__td   whitespace-nowrap  ">
          <span
            onClick={() => setShowMore(true)}
            className="text-custom_green cursor-pointer"
          >
            {item?.name}
          </span>
        </td>
        <td className="table__td   whitespace-nowrap ">{item?.last_name}</td>
        <td className="table__td   whitespace-nowrap ">{item?.email}</td>
        <td className="table__td   whitespace-nowrap ">{item?.role}</td>
        <td className="table__td   whitespace-nowrap ">
          {item?.department?.name}
        </td>
      </tr>
    </>
  );
}

export default ProfileItem;
