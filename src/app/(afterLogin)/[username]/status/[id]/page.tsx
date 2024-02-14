import React from "react";
import style from "./singlePost.module.css";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import Post from "@/app/(afterLogin)/_components/Post";
import PostForm from "@/app/(afterLogin)/home/_components/PostForm";
import CommentForm from "./_components/CommentForm";

/* 유저 개별 게시글 */
const Page = () => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Page;
