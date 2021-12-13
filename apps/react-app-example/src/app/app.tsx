import styles from './app.module.scss';
import { useGetUsersQuery } from "@graphql-sse/schemas";
import { UserPage } from "./users/UserPage_hooks_comments";
import { useState } from "react";

import './testQuery'

export function App() {
  let {data} = useGetUsersQuery();
  const [userId, setUserId] = useState(0);

  if (!data) return <div>Loading...</div>
  return (
    <div className={styles.app}>
      <ul>
        {data.users.map(user => <li onClick={() => setUserId(user.id)}>{user.name}</li>)}
      </ul>
      { userId ?
        <UserPage userId={userId}></UserPage>
        :
        <div>Select a user</div>
      }
    </div>
  );
}

export default App;
