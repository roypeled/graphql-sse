import { gql, useQuery } from "@apollo/client";

export function useGetComments({postId}: {postId:number}) {
  const {data, loading, error} = useQuery(gql`
    query GetComments($postId:Int) {
      comments(postId:$postId) {
        body,
        name,
        dateCreated
      }
    }
  `,
    {
      variables: {postId},
      // pollInterval: 500
    }
  );

  return {data, loading, error};
}
