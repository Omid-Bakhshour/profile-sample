import React from "react";

function ProfileItem({ item }) {
  return (
    <tr className="border-b border-gray-300 last:border-none">
      <td className="table__td   whitespace-nowrap ">{item?.name}</td>
      <td className="table__td   whitespace-nowrap ">{item?.last_name}</td>
      <td className="table__td   whitespace-nowrap ">{item?.email}</td>
      <td className="table__td   whitespace-nowrap ">{item?.role}</td>
      <td className="table__td   whitespace-nowrap ">
        {item?.department?.name}
      </td>
    </tr>
  );
}

export default ProfileItem;
