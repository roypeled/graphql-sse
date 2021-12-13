import { useGetCommentsQuery } from "../../../../../../libs/schemas/generated/types-and-hooks";
import { useCreateComment } from "./useCreateComment";
import { AddComment } from "./AddComment";

export function Comments({postId}: { postId: number }) {
  const {data, loading, error} = useGetCommentsQuery({
    variables: {postId},
  });


  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error!</div>;

  return <div>
      <AddComment postId={postId}/>
    <ul>
      {data.comments.map(comment => <li>
        <p>{comment.body}</p>
        <small>{comment.name}</small>
      </li>)}
    </ul>
  </div>
}
