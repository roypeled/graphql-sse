import { gql, useQuery } from "@apollo/client";

export function useGetUserPosts({userId}:QueryVars) {
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

  return {data, loading, error}
}

interface Query {
  posts: {
    id: number,
    title: string,
    body: string
  }[]
}

export interface QueryVars {
  userId: number
}
