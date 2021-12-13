import { gql, useMutation } from "@apollo/client";

export function useCreateComment() {
  const [createComment, {data, loading, error}] = useMutation<Mutation, MutationVars>(gql`
    mutation CreateComment($input:CreateCommentInput!) {
      createComment(input:$input) {
        comment {
          body,
          dateCreated
        }
      }
    }
  `);

  return {createComment, data, loading, error};
}

interface Mutation {
  createComment: {
    comment: {
      body: string,
      dateCreated: string,
    }
  }
}

interface MutationVars {
  input: {
    email?:string,
    body:string,
    postId: number,
    name?:string,
  }
}
