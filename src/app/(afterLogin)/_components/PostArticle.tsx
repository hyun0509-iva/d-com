"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import style from "./post.module.css";
import { Post } from "@/model/Post";

interface IProps {
  children: ReactNode;
  post: Post
}
const PostArticle = ({ children, post }: IProps) => {
  const router = useRouter();
  let target = post;

  if (post.Original) {
    //원본이 들어있는 경우
    target = post.Original;
  }

  const onClick = () => {
    router.push(`/${target.User.id}/status/${target.postId}`);
  };

  return (
    <article className={style.post} onClick={onClick}>
      {children}
    </article>
  );
};

export default PostArticle;
