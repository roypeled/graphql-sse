import { gql, useQuery } from "@apollo/client";
import style from './user.module.scss';

export function UserPage({userId}: QueryVars) {
  const {data, loading, error} = useQuery<Query, QueryVars>(gql`
            query GetPosts($userId:Int) {
              posts(userId:$userId) {
                id,
                title,
                body
              }
            }
    `,
    {variables: {userId}}
  );

  if (loading) return <div>Loading...</div>;
  if (!data || error) return <div>Error!</div>;

  return <ul className={style.userSingle}>
    {data.posts.map(post => <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>)}
  </ul>
}

interface Query {
  posts: {
    id: number,
    title: string,
    body: string
  }[]
}

interface QueryVars {
  userId: number
}
