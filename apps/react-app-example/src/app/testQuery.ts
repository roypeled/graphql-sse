import { gql } from "@apollo/client";
import { apolloClient } from "./Apollo.client";

async function getUsers() {
  const {data, error} = await apolloClient.query({
    query: gql`
      query GetUsers {
        users {
          id,
          username,
          name,
          email
        }
      }
    `
  });

  console.log(data);
}

getUsers();

