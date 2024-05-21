"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') { // 브라우저 환경에서만 작동 보장
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        import("@/mocks/brower");
      }
    }
  }, []);

  return null;
};