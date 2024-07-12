"use client";

import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import { Fragment, useEffect, useRef } from "react";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import { Post as IPost } from "@/model/Post";
import Post from "@/app/(afterLogin)/_components/Post";
import { useInView } from "react-intersection-observer";
import styles from "@/app/(afterLogin)/home/home.module.css";

export default function PostRecommends() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isPending } =
    // useInfiniteQuery<
    useSuspenseInfiniteQuery<
      IPost[],
      Object,
      InfiniteData<IPost[]>,
      [_1: string, _2: string],
      number
    >({
      queryKey: ["posts", "recommends"],
      queryFn: getPostRecommends,
      initialPageParam: 0, // lastPage: 1, 2, 3, 4, 5, cursor: 5
      // ㄴ 데이터는 2차원 배열:  [1, 2, 3, 4, 5], [6, 7, 8, 9, 10]이런 형태로 담겨있음
      getNextPageParam: (lastPage) => lastPage.at(-1)?.postId, // -> 최근 불려온 데이터의 마지막 게시글(= 다음 cursor)
      staleTime: 60 * 1000, //1분마다 refetch, fresh -> stale: 5분이라는 기준
      gcTime: 300 * 1000,
    });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetching]);

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }}></div>{" "}
      {/* 페이지 최하단임을 감지하기 위한 가상 태그 */}
    </>
  );
}
