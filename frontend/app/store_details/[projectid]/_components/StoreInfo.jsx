import Link from "next/link";
import React from "react";

export default function StoreInfo({ store }) {
  return (
    <div>
      <div className="pr-30 ">
        <h2 className="text-[25px] font-semibold">
          {store?.attributes?.Title}
        </h2>

        <h2 className="text-[15px] mt-2 text-gray-400">
          {store?.attributes?.Category}
        </h2>

        <h2 className="text-[17px] mt-7">
          {store?.attributes?.Descriptions?.[0].children?.[0].text}
        </h2>

        <a
          className="inline-flex items-center gap-2 mt-10 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="{store?.attributes?.Page_link}"
        >
          <span className="text-sm font-medium"> Page Link </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
