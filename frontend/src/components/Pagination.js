"use client";

import React from "react";

import {
  BiChevronRight as RightIcon,
  BiChevronLeft as LeftIcon,
} from "react-icons/bi";

function Pagination({ pageSize, page, clickHandler }) {
  let lastPage = null;
  let CenterPage = null;
  let firstPage = null;
  let showMore1 = false;
  let showMore2 = false;

  if (page < pageSize && page > 3) {
    lastPage = Math.ceil(page / 3) * 3;
    if (lastPage > pageSize) {
      lastPage = pageSize;
      showMore2 = false;
      showMore1 = true;
    } else {
      showMore1 = true;
      showMore2 = true;
    }
    CenterPage = lastPage - 1;
    firstPage = lastPage - 2;
  } else if (page === pageSize && page > 3) {
    showMore2 = false;
    showMore1 = true;
    lastPage = pageSize;
    CenterPage = lastPage - 1;
    firstPage = lastPage - 2;
    lastPage = false;
  } else {
    if (page <= 3 && pageSize > 3) {
      showMore2 = true;
      showMore1 = false;
    }

    showMore1 = false;
    firstPage = 1;
    if (pageSize < 3) {
      CenterPage = null;
      lastPage = null;
    } else {
      CenterPage = 2;
      lastPage = 3;
    }
  }

  return page <= pageSize ? (
    <div className=" flex flex-row pt-5 bg-white items-center justify-between gap-4 ">
      {/* prev */}
      {page !== 1 && (
        <div
          onClick={() => clickHandler(page - 1)}
          className=" flex gap-2 items-center text-customRed cursor-pointer text-xs font-bold text-custom_green"
        >
          <LeftIcon className="w-5 h-5" />
          <span>previuos</span>
        </div>
      )}

      {/* pagination */}
      <div className="w-full flex items-center justify-center flex-1  gap-1 text-sm">
        {page > 3 && (
          <span onClick={() => clickHandler(1)} className="pagination_button">
            <span>{1}</span>
          </span>
        )}

        {showMore1 && <span>...</span>}

        {page == firstPage ? (
          <span className={`pagination_selected`}>
            <span>{firstPage}</span>
          </span>
        ) : (
          <span
            onClick={() => clickHandler(firstPage)}
            className={`pagination_button`}
          >
            <span>{firstPage}</span>
          </span>
        )}

        {CenterPage &&
          (page == CenterPage ? (
            <span className={`pagination_selected`}>
              <span>{CenterPage}</span>
            </span>
          ) : (
            <span
              onClick={() => clickHandler(CenterPage)}
              className={`pagination_button`}
            >
              <span>{CenterPage}</span>
            </span>
          ))}

        {lastPage &&
          (page == lastPage ? (
            <span className={`pagination_selected`}>
              <span>{lastPage}</span>
            </span>
          ) : (
            <span
              onClick={() => clickHandler(lastPage)}
              className={`pagination_button`}
            >
              <span>{lastPage}</span>
            </span>
          ))}

        {showMore2 && <span>...</span>}
        {lastPage !== pageSize &&
          pageSize !== 1 &&
          (page == pageSize ? (
            <span className={`pagination_selected`}>
              <span>{pageSize}</span>
            </span>
          ) : (
            <span
              onClick={() => clickHandler(pageSize)}
              className={`pagination_button`}
            >
              <span>{pageSize}</span>
            </span>
          ))}
      </div>
      {/* next */}
      {page !== pageSize && (
        <div
          onClick={() => clickHandler(page + 1)}
          className=" flex gap-2 items-center text-customRed cursor-pointer text-xs font-bold text-custom_green"
        >
          <span>next</span>
          <RightIcon className="w-5 h-5" />
        </div>
      )}
    </div>
  ) : null;
}

export default Pagination;
