"use client";

import { sort_list } from "@/utils/list";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

function Search() {
  const [text, setText] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      if (value != "") {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const selectClickHandler = (sort) => {
    router.push(pathname + "?" + createQueryString("sort", sort));
  };

  const textClickHandler = () => {
    router.push(pathname + "?" + createQueryString("text", text));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      router.push(pathname + "?" + createQueryString("text", text));
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <span
          onClick={() => router.push(pathname)}
          className="text-base text-custom_green cursor-pointer w-auto"
        >
          clear filter
        </span>
      </div>

      <div className="w-full flex flex-col md:flex-row  gap-4">
        {/* input */}

        <div className="w-full md:max-w-[600px] flex flex-row items-center border border-gray-700 rounded-lg px-4 py-3 ">
          <input
            placeholder="Search by Name,LastName,Email"
            className="w-full text-base text-black mr-4"
            value={text}
            onKeyDown={handleKeyPress}
            onChange={(e) => setText(e.target.value)}
          />

          <div onClick={textClickHandler}>
            <SearchIcon className="w-5 h-5 block text-black cursor-pointer" />
          </div>
        </div>
        {/* select list */}
        <select
          className="border border-gray-400 rounded-lg py-2 px-1"
          onChange={(e) => selectClickHandler(e.target.value)}
        >
          <option value="">--Please choose an option--</option>

          {sort_list?.map((item) => {
            return (
              <option key={item?.id} value={item?.name}>
                {item?.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Search;
