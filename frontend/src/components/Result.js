"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import EmptyResult from "./EmptyResult";
import ProfileItem from "./ProfileItem";
import Pagination from "./Pagination";
import LoadingList from "./LoadingList";
import axios from "@/services/axios";

function Result() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

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

  const getProfile = async () => {
    setLoading(true);
    const url = `/profile/list/?${searchParams.toString()}`;
    try {
      const response = await axios.get(url);
      setResult(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const pageClickHandler = (page) => {
    router.push(pathname + "?" + createQueryString("page", page));
  };

  useEffect(() => {
    getProfile();
  }, [searchParams]);
  return (
    <>
      {/* loading */}
      {loading ? (
        <LoadingList />
      ) : (
        <div className="w-full flex flex-col gap-4">
          {result?.results?.length > 0 ? (
            <>
              <div className="relative overflow-x-auto rounded-xl bg-tablebg border-gray-400 border shadow-sm">
                <table className="border-collapse table-auto w-full min-w-[500px] text-sm  ">
                  <thead className="bg-custom_green ">
                    <tr>
                      <th className="table__head ">email</th>
                      <th className="table__head ">first name</th>
                      <th className="table__head ">lastname</th>
                      <th className="table__head  ">role</th>
                      <th className="table__head  ">department</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white w-full">
                    {result?.results?.map((item) => {
                      return <ProfileItem key={item?.id} item={item} />;
                    })}
                  </tbody>
                </table>
              </div>

              <div className="w-full block overflow-x-auto">
                {result?.page_size > 1 && (
                  <Pagination
                    page={result?.page}
                    pageSize={result?.page_size}
                    clickHandler={pageClickHandler}
                  />
                )}
              </div>
            </>
          ) : (
            <EmptyResult />
          )}
        </div>
      )}
    </>
  );
}

export default Result;
