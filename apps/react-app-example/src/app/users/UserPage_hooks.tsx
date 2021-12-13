import { gql, useQuery } from "@apollo/client";
import { useCreateCommentMutation } from "@graphql-sse/schemas"
import { QueryVars, useGetUserPosts } from "./useGetUserPosts";
import style from './user.module.scss';

export function UserPage({userId}: QueryVars) {
  const {data, loading, error} = useGetUserPosts({userId});

  if (loading) return <div>Loading...</div>;
  if (!data || error) return <div>Error!</div>;

  return <ul className={style.userSingle}>
    {data.posts.map(post => <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>)}
  </ul>
}

