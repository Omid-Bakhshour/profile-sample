import React from "react";

function Text({ title, value }) {
  return (
    <p className="flex items-center gap-1 text-base">
      <span className="font-bold text-custom_green">{title}</span>
      <span className="text-black">{value}</span>
    </p>
  );
}

export default Text;
