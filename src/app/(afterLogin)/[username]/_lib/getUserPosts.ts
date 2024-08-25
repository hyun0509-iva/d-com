import {QueryFunction} from "@tanstack/query-core";
import {Post} from "@/model/Post";

export const getUserPosts: QueryFunction<Post[], [_1: string, _2: string, string]>
  = async ({ queryKey }) => {
  console.log(queryKey);  
  const [_1, _2, username] = queryKey;
  console.log({username});
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users/${username}/posts?cursor=0`, {
    next: {
      tags: ['posts', 'users', username],
    },
    credentials: 'include',
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}