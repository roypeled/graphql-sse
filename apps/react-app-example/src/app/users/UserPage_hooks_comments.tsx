import { QueryVars, useGetUserPosts } from "./useGetUserPosts";
import { useState } from "react";
import { Comments } from "./comments/Comments_poll";
import style from './user.module.scss';

export function UserPage({userId}: QueryVars) {
  const [postId, setPostId] = useState(0);
  const {data, loading, error} = useGetUserPosts({userId});

  if (loading) return <div>Loading...</div>;
  if (!data || error) return <div>Error!</div>;

  return <div className={style.user}>
    <ul>
      {data.posts.map(post => <li onClick={() => setPostId(post.id)}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </li>)}
    </ul>
    {
      postId ? <Comments postId={postId}></Comments> : ''
    }
  </div>
}

