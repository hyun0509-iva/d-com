"use client";

import {useQuery} from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_components/Post";
import {Post as IPost} from "@/model/Post";
import {getSinglePost} from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";

type Props = {
  id: string;
  noImage?: boolean;
}
const SinglePost = ({id, noImage}: Props) => {
  const {data: post, error} = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });
  if (error) {
    return (
      <div style={{
        height: 100,
        alignItems: 'center',
        fontSize: 31,
        fontWeight: 'bold',
        justifyContent: 'center',
        display: 'flex'
      }}>게시글을 찾을 수 없습니다.</div>
    )
  }
  if (!post) {
    //error가 없는데 post기 없는 상황은 loading 상황
    return null;
  }
  return <Post key={post.postId} post={post} noImage={noImage}/>
}

export default SinglePost;