import React from "react";
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";
import style from "./explore.module.css";
import TrendSection from "../_components/TrendSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '탐색하기 / D',
  description: '탐색해보세요' 
}

/* 탐색 */
const Page = () => {
  return (
    <>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <TrendSection />
      </div>
    </>
  );
};

export default Page;
