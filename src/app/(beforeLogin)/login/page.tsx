"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_components/Main";

const Login = () => {
  console.log("나 실행됨??");
  const router = useRouter();
  useEffect(() => {
    router.replace("/i/flow/login");
  }, [router])
  return (
    <Main />
  );
};

export default Login;
