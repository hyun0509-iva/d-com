"use client";

import { signOut } from "next-auth/react";
import style from "./logoutButton.module.css";
import { useRouter } from "next/navigation";
import { Session } from "@auth/core/types";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  me: Session | null;
};

const LogoutButton = ({ me }: Props) => {
  const router = useRouter();
  const queryClient = useQueryClient()
  
  if (!me?.user) return null;

  const onLogout = () => {
    queryClient.invalidateQueries({
      queryKey: ['posts']
    })
    queryClient.invalidateQueries({
      queryKey: ['users']
    })
    signOut().then(() => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
        method: 'post',
        credentials: 'include'
      })
      router.replace("/");
      router.refresh();
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
