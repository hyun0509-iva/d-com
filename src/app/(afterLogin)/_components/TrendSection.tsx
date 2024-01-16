"use client";

import React from "react";
import style from "./trendSection.module.css";
import Trend from "./Trend";
import { usePathname } from "next/navigation";

const TrendSection = () => {
  const pathname = usePathname();
  if (pathname === "/explore") return null; // '/explore'인 경우 아무것도 반환하지 않음
  return (
    <div className={style.trandBg}>
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
      </div>
    </div>
  );
};

export default TrendSection;
