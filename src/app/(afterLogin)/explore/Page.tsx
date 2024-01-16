import React from "react";
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";
import Trend from "@/app/(afterLogin)/_components/Trend";
import style from "./explore.module.css";

/* 탐색 */
const Page = () => {
  return (
    <>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </>
  );
};

export default Page;
