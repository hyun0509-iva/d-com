"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import style from "./post.module.css";

interface IProps {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
}
const PostArticle = ({ children, post }: IProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  return (
    <article className={style.post} onClick={onClick}>
      {children}
    </article>
  );
};

export default PostArticle;
