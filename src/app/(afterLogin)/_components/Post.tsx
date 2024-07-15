import style from './post.module.css';
import Link from "next/link";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import {Post as PostModel} from "@/model/Post";
import PostArticle from './PostArticle';
import PostImages from './PostImages';
import ActionButtons from './ActionButtons';
import { MouseEventHandler } from 'react';

dayjs.locale('ko');
dayjs.extend(relativeTime)

type Props = {
  noImage?: boolean
  post: PostModel
}
const Post = ({ noImage, post }: Props) => {
  const target = post;
  const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
  }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage} onClick={stopPropagation}>
            <img src={target.User.image} alt={target.User.nickname}/>
            <div className={style.postShade}/>
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`} onClick={stopPropagation}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target?.createdAt).fromNow(true)}</span>
          </div>
          <div>{target?.content}</div>
          {!noImage && <div>
            <PostImages post={target} />
          </div>}
          <ActionButtons post={post}/>
        </div>
      </div>
    </PostArticle>
  )
}

export default Post;