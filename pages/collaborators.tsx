import React from "react";

/**
 * If we want to have a collaborators section then we can use this request
 * to the github graphql api


   repositories(first: 100) {
      edges {
        node {
          ... on Repository {
            collaborators {
              edges {
                permission
                node {
                  avatarUrl
                  bio
                  name
                  company
                  websiteUrl
                  email
                  url
                  twitterUsername
                }
              }
            }
          }
        }
      }
    }

  * If the collaborators permission is "MAINTAIN" then that means that they
  * are an outside collaborator
 */

export default function Collaborators() {
  return <div>Collaborators</div>;
}
