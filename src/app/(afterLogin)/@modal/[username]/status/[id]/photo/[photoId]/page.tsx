import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";
import PhotoModalCloseButton
from "@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_components/PhotoModalCloseButton";
import {faker} from "@faker-js/faker";
import style from './photoModal.module.css';
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ImageZone from "@/app/(afterLogin)/[username]/status/[id]/photo/[photoId]/_component/ImageZone";
import SinglePost from "@/app/(afterLogin)/[username]/status/[id]/_components/SinglePost";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_components/Comments";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";

type Props = {
  params: { id: string }
}

const Default = async ({params}: Props) => {
  const {id} = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({queryKey: ['posts', id], queryFn: getSinglePost})
  await queryClient.prefetchQuery({queryKey: ['posts', id, 'comments'], queryFn: getComments})
  const dehydratedState = dehydrate(queryClient)

  return (
    <div className={style.container}>
     <HydrationBoundary state={dehydratedState}>
        <PhotoModalCloseButton/>
        <ImageZone id={id} />
        <div className={style.commentZone}>
          <SinglePost id={id} noImage />
          <CommentForm id={id} />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}

export default Default;