type Props = { pageParam?: number };
export const getPostRecommends = async ({pageParam}: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/posts/recommends?cursor=${pageParam}`, {
    next: {
      tags: ["posts", "recommends"],
    },
    cache: "no-store", //캐시 안함(캐시=기존 데이터를 저장)
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
