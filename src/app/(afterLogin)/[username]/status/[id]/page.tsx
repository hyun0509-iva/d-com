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
import { getSinglePost } from "./_lib/getSinglePost";
import style from "./singlePost.module.css";

/* 유저 개별 게시글 */
type Props = {
  params: { id: string };
};
const Page = async ({ params }: Props) => {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
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
          <Comments id={id}/>
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
