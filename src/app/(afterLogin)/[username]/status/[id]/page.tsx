import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import CommentForm from "./_components/CommentForm";
import SinglePost from "./_components/SinglePost";
import Comments from "./_components/Comments";
import { getComments } from "./_lib/getComments";
import { getSinglePostServer } from "./_lib/getSinglePostServer";
import style from "./singlePost.module.css";
import { getUserServer } from "../../_lib/getUserServer";
import { Post } from "@/model/Post";
import { Metadata } from "next";
import { User } from "@/model/User";

/* 유저 개별 게시글 */
type Props = {
  params: { id: string; username: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user: User = await getUserServer({
    queryKey: ["users", params.username],
  });
  const post: Post = await getSinglePostServer({
    queryKey: ["posts", params.id],
  });
  return {
    title: `D에서 ${user.nickname} 님 : (${post.content})`,
    description: post.content,
  };
}

const Page = async ({ params }: Props) => {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePostServer,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
