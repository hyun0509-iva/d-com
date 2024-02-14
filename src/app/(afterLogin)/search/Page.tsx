import style from "./search.module.css";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";
import Tab from "@/app/(afterLogin)/search/_components/Tab";
import Post from "@/app/(afterLogin)/_components/Post";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};
export default function Search({ searchParams }: Props) {
  return (
    <>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={style.list}>
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
        {/* <SearchResult searchParams={searchParams} /> */}
      </div>
    </>
  );
}
