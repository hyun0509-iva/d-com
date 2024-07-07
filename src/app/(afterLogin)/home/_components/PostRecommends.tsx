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
    staleTime: 60 * 1000, //1분마다 refetch, fresh -> stale: 5분이라는 기준
    gcTime: 300 * 1000
  });

  return data?.map((post: IPost) => <Post key={post.postId} post={post} />);
}
