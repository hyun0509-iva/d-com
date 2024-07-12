import React, { Suspense } from "react";
import TabProvider from "./_components/TabProvider";
import Tab from "./_components/Tab";
import PostForm from "./_components/PostForm";
import TabDeciderSuspense from "./_components/TabDeciderSuspense";
import Loading from "./loading";

const Home = async () => {
  return (
    <TabProvider>
      <Tab />
      <PostForm />
      <Suspense fallback={<Loading />}>
        <TabDeciderSuspense />
      </Suspense>
    </TabProvider>
  );
};

export default Home;
