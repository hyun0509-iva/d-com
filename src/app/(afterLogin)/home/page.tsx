import React, { Suspense } from "react";
import TabProvider from "./_components/TabProvider";
import Tab from "./_components/Tab";
import PostForm from "./_components/PostForm";
import TabDeciderSuspense from "./_components/TabDeciderSuspense";
import Loading from "./loading";
import { auth } from "@/auth";
import { Metadata } from "next";

export const matadata: Metadata = {
  title: '홈 / D',
  description: '홈'
}

const Home = async () => {
  const session = await auth();
  return (
    <TabProvider>
      <Tab />
      <PostForm me={session}/>
      <Suspense fallback={<Loading />}>
        <TabDeciderSuspense />
      </Suspense>
    </TabProvider>
  );
};

export default Home;
