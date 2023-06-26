import React from "react";

import { MdOutlineScreenSearchDesktop as ResultIcon } from "react-icons/md";

function EmptyResult() {
  return (
    <div className="w-full flex flex-col items-center justify-center  gap-6">
      <ResultIcon className="w-14 h-14 block lg:w-28 lg:h-28 text-custom_green " />

      <p className=" text-sm md:text-base font-bold text-gray-400 ">
        Sorry, the item you search is not exist!
      </p>
    </div>
  );
}

export default EmptyResult;
