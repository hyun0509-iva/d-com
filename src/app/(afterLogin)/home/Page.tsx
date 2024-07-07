import React from "react";
import TabProvider from "./_components/TabProvider";
import Tab from "./_components/Tab";
import PostForm from "./_components/PostForm";
import PostRecommends from "./_components/PostRecommends";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPostRecommends } from "./_lib/getPostRecommends";

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  })
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TabProvider>
        <Tab />
        <PostForm />
        <PostRecommends />
      </TabProvider>
    </HydrationBoundary>
  );
};

export default Home;
