import { useCreateComment } from "./useCreateComment";
import { useState } from "react";

export function AddComment({postId}: { postId: number }) {
  const {createComment, loading, error} = useCreateComment();
  const [body, setBody] = useState('');

  if(loading) return <div>Saving...</div>;
  if(error) return <div>Error!</div>;

  function saveComment() {
    createComment({
      variables: {
        input: {
          body, postId
        }
      }
    })
  }

  return <fieldset>
    <legend>Add new Comment</legend>
    <textarea onChange={e => setBody(e.target.value)} />
    <button onClick={saveComment}>Submit</button>
  </fieldset>
}
