import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img width={400} src="/404Image.jpg" alt="not found image" />
      </div>
      <Link href="/">홈으로</Link>
    </div>
  );
};

export default NotFound;
