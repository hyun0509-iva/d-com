"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_components/Post";
import { Post as IPost } from "@/model/Post";
import { getFollowingPosts } from "@/app/(afterLogin)/home/_lib/getFollowingPosts";
import Loading from "@/app/(afterLogin)/home/loading";

export default function FollowingPosts() {
  const { data } = useSuspenseQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // 1분, fresh -> stale(5분이라는 기준)
    gcTime: 300 * 1000,
  });

  // if (isPending) {
  //   return < Loading />;
  // }
  // console.log({ isPending });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
