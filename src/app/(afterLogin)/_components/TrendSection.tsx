"use client";

import React from "react";
import style from "./trendSection.module.css";
import Trend from "./Trend";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from "@/app/(afterLogin)/_lib/getTrends";
import { Hashtag } from "@/model/Hashtag";

const TrendSection = () => {
  const { data: session } = useSession();

  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user,
  });

  // const pathname = usePathname();
  // if (pathname === '/explore') return null;
  if (session?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          {data?.map((trend, idx) => (
            <Trend key={idx} trend={trend} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={style.trandBg}>
      <div className={style.noTrend}>트렌드를 가져올 수 없습니다.</div>
    </div>
  );
};

export default TrendSection;
