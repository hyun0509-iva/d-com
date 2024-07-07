"use client"

import {useQuery} from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_components/Post";
import { Post as IPost } from '@/model/Post';
import { getFollowingPosts } from "@/app/(afterLogin)/home/_lib/getFollowingPosts";

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // 1분, fresh -> stale(5분이라는 기준)
    gcTime: 300 * 1000,
  })

  return data?.map((post) => (
    <Post key={post.postId} post={post} />
  ))
}