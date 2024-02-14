import Home from "@/app/(beforeLogin)/page";
import React from "react";

interface Iprops {
  params: { username: string; id: string; photoId: string };
}

const Page = ({ params }: Iprops) => {
  // params.username; //elonmusk
  // params.id; //1
  // params.photoId; //1
  return <Home />;
};

export default Page;
