export const getTrends = async () => {
  console.log("getTrends");
  const res = await fetch(`http://localhost:9090/api/hashtags/trends`, {
    next: {
      tags: ["trends"],
    },
    credentials: 'include',
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log({ res });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
