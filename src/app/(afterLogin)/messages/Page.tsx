import React from "react";
import style from "./message.module.css";
import Room from "./_components/Room";

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
