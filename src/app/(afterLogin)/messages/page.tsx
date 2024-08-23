import React from "react";
import style from "./message.module.css";
import Room from "./_components/Room";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '쪽지 / D',
  description: '쪽지를 보내주세요' 
}

const Page = () => {
  return (
    <>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </>
  );
};

export default Page;
