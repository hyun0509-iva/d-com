import React from "react";
import style from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import dLogo from "../../../public/dlogo.png";
import NavMenu from "./_components/NavMenu";
import LogoutButton from "./_components/LogoutButton";

interface IProps {
  children: React.ReactNode;
}

const AfterLoginLayout = ({ children }: IProps) => {
  console.log("AfterLoginLayout");
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={dLogo} alt="d.com 로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>게시하기</Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}></section>
        </div>
      </div>
    </div>
  );
};

export default AfterLoginLayout;
