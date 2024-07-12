"use client";

import { signOut, useSession } from "next-auth/react";
import style from "./logoutButton.module.css";
import { Router } from "express";
import { useRouter } from "next/navigation";
import { Session } from "@auth/core/types";

type Props = {
  me: Session | null;
};

const LogoutButton = ({ me }: Props) => {
  const router = useRouter();
  // const {data: me} = useSession();

  if (!me?.user) return null;

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string} />
        {/* == <img src={me.user?.image!} alt={me.user?.id}/> !는 해당 타입을 강제함*/}
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
};

export default LogoutButton;
