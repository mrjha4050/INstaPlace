"use client";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import StoreListing from "./StoreListing";

export default function StoreSection() {
  const [storeListing, setStoreListing] = useState([]);

  const getLatestStore_ = useCallback(() => {
    GlobalApi.getLatestStores()
      .then((resp) => {
        console.log(resp.data);
        setStoreListing(resp.data.data);
      })
      .catch((error) => console.log(error));
  },[GlobalApi]);

  useEffect(() => {
    getLatestStore_();
  }, [getLatestStore_]);

  return (
    <div className="p-10 px-10 md:px-20">
      <h2 className="p-1 pb-6 font-medium text-center text-[15px] md:text-[22px] ">Trending </h2>
      {storeListing.length > 0 && <StoreListing storeListing={storeListing} />}
    </div>
  );
}