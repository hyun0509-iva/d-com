import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { faker } from "@faker-js/faker";
import relativeTime from "dayjs/plugin/relativeTime";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
import style from "./post.module.css";
import PostImages from "./PostImages";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface IProps {
  noImage?: boolean;
}

export default function Post({ noImage }: IProps) {
  const target = {
    postId: 1,
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/yRsRRjGO.jpg",
    },
    content: "클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ",
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() }, /* 이미지 1개인 경우*/
      { imageId: 2, link: faker.image.urlLoremFlickr() }, /* 이미지 2개인 경우 */
      { imageId: 3, link: faker.image.urlLoremFlickr() }, /* 이미지 3개인 경우 */
      // { imageId: 4, link: faker.image.urlLoremFlickr() }, /* 이미지 4개인 경우 */
    );
    target.content = faker.lorem.text();
  }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
