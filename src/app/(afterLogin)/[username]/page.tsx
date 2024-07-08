import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_components/Post";
import style from "./profile.module.css";
import { getUser } from "./_lib/getUser";
import { getUserPosts } from "./_lib/getUserPosts";
import UserPosts from "./_components/UserPosts";
import UserInfo from "./_components/UserInfo";

/* 유저 프로필 */
type Props = {
  params: { username: string };
};
const Profile = async ({ params }: Props) => {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary>
      <UserInfo username={username} />
        <div>
          <UserPosts username={username}/>
        </div>
      </HydrationBoundary>
    </main>
  );
};

export default Profile;
