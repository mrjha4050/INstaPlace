"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import StoreBanner from "./_components/StoreBanner";
import Breadcrumb from "@/app/_components/Breadcrumb";
import GlobalApi from "@/app/_utils/GlobalApi";
import StoreInfo from "./_components/StoreInfo";

export default function StoreDetails({params}) {
  const path = usePathname();
  const [storeDetail, setStoreDetail] = useState();

  useEffect(() => {
    // console.log("path id", params?.projectid)
    getStoreById_();
  }, []);

  const getStoreById_ = () => {
    GlobalApi.getStoreById(params?.projectid).then((resp) => {
      setStoreDetail(resp.data.data);
    });
  };
  return (
    <div className="p-5 py-13 px-6 md:px-28">
      <Breadcrumb path={path}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-6 ">
        <StoreBanner store={storeDetail}/>
        <StoreInfo store={storeDetail}/>
      </div>
    </div>
  );
}
