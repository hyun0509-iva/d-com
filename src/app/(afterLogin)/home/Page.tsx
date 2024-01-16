import React from "react";
import TabProvider from "./_components/TabProvider";
import Tab from "./_components/Tab";
import PostForm from "./_components/PostForm";
import style from "./home.module.css";
import Post from "../_components/Post";

const Home = () => {
  return (
    <TabProvider>
      <Tab />
      <PostForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </TabProvider>
  );
};

export default Home;
