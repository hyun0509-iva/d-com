"use client";

import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import { Post as IPost } from "@/model/Post";
import Post from "@/app/(afterLogin)/_components/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });

  return data?.map((post: IPost) => <Post key={post.postId} post={post} />);
}
