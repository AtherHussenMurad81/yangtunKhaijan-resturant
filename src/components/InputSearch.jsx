"use client";
// import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

const InputSearch = () => {
  //   const router = useRouter();
  //   console.log(router);
  const router = useRouter();
  //   const params = useSearchParams();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    console.log(value);
    //1.নতুন search parameters
    const newParams = new URLSearchParams(params.toString());
    //2. set query

    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex items-center justify-center mb-5">
      <form onSubmit={handleSubmit}>
        <input
          className="px-1 py-3 border-2 rounded w-2xl"
          type="text"
          name="search"
          id=""
          placeholder="Enter Food Name"
        />
        <button className="px-4 py-3 ml-4 bg-yellow-500 text-black rounded cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
