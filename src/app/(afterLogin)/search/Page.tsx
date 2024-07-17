import style from "./search.module.css";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";
import Tab from "@/app/(afterLogin)/search/_components/Tab";
import Post from "@/app/(afterLogin)/_components/Post";
import SearchResult from "./_components/SearchResult";
import { Metadata } from "next";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};
//Promise<Metadata>
export const generateMetadata = async ({
  searchParams,
}: Props): Promise<Metadata> => {
  return {
    title: `${searchParams.q} - 검색 / D`,
    description: `${searchParams.q} - 검색 / D`,
  };
};

const Search = ({ searchParams }: Props) => {
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
        <SearchResult searchParams={searchParams} />
      </div>
    </>
  );
};

export default Search;
