import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import style from "./profile.module.css";
import { getUserServer } from "./_lib/getUserServer";
import { getUserPosts } from "./_lib/getUserPosts";
import UserPosts from "./_components/UserPosts";
import UserInfo from "./_components/UserInfo";
import { auth } from "@/auth";
import { User } from "@/model/User";
import { Metadata } from "next";

/* 유저 프로필 */
type Props = {
  params: { username: string };
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const user: User = await getUserServer({queryKey: ['users', params.username]});
  return {
    title: `${user.nickname} (${user.id}) / D`,
    description: `${user.nickname} (${user.id}) 프로필`
  }
}


const Profile = async ({ params }: Props) => {
  const { username } = params;
  const session = await auth();
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUserServer,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
      <UserInfo session={session} username={username} />
        <div>
          <UserPosts username={username}/>
        </div>
      </HydrationBoundary>
    </main>
  );
};

export default Profile;
