"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";
import style from "./rightSearchZone.module.css";

const RightSearchZone = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const onChangeFollow = () => {
    // let url = `/search?q=${searchParams.get('q')}&pf=on`;
    // router.replace(url);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('pf', 'on');
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onChangeAll = () => {
    // let url = `/search?q=${searchParams.get("q")}`;
    // if (searchParams.has("f")) {
    //   url += `&f=${searchParams.get("f")}`;
    // }
    // router.replace(url);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('pf');
    router.replace(`/search?${newSearchParams.toString()}`);

  };
  if (pathname === "/explore") {
    return null;
  }
  if (pathname === "/search") {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input
                type="radio"
                name="pf"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="pf"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <SearchForm />
    </div>
  );
};

export default RightSearchZone;
