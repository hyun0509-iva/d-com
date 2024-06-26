"use client"

import { signOut, useSession } from "next-auth/react";
import style from "./logoutButton.module.css";
import { Router } from "express";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const {data: me} = useSession();

  // const me = { // 임시로 내 정보 있는것처럼
  //   id: 'donghyun0',
  //   nickname: '이동현',
  //   image: '/5Udwvqim.jpg',
  // }

  if(!me?.user) return null;

  const onLogout = () => {
    signOut({redirect: false})
     .then(() => {
      router.replace('/')
     })
  };

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string}/>
        {/* == <img src={me.user?.image!} alt={me.user?.id}/> !는 해당 타입을 강제함*/} 
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  )
}