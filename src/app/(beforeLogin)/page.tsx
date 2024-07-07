import { auth } from "@/auth";
import Main from "./_components/Main";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/home");
  }
  return <Main />;
};

export default Home;
