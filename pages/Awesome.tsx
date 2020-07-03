import React from "react";
import { Layout } from "../components/Layout";
import { GetStaticProps } from "next";

type User = {
  name: string;
  bio: string;
  avatarUrl: string;
  email: string;
  company: string;
  websiteUrl: string;
  location: string;
  login: string;
};

type Node = { node: User };

type Users = Array<Node>;

type Response = {
  data: {
    organization: {
      membersWithRole: {
        edges: Users;
      };
    };
  };
};

type Props = {
  users: Users;
};

export default function Awesome({ users }: Props) {
  return (
    <Layout>
      <div className="text-center bg-gray-200 py-24 px-8">
        <h2 className="font-bold mb-3 text-6xl text-gray-800">
          Awesome Natives in Tech
        </h2>
        <p className="mb-6 text-gray-800 text-lg max-w-screen-md mx-auto">
          A list of Native and non-Native technologists that represent or serve
          Native communities
        </p>
      </div>
      <div className="p-8 flex flex-wrap justify-around mb-16">
        {users.map((user) => {
          return (
            <div key={user.node.login} className="shadow-lg rounded-lg mt-16">
              <div
                className="bg-cover rounded-lg rounded-b-none"
                style={{
                  backgroundImage: `url(${user.node.avatarUrl})`,
                  height: 384,
                  width: 384,
                }}
              />
              <div className="p-4" style={{ maxWidth: 384 }}>
                <div>
                  <span className="text-xl"> {user.node.name}</span>
                  <span className="ml-2">
                    {user.node.company ? `(${user.node.company})` : ""}
                  </span>
                </div>
                <div className="text-sm mb-2">
                  <span className="">{user.node.location}</span>
                </div>
                <div className="italic">{user.node.bio}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (_context) => {
  const graphQLQuery: string = `{
    organization(login:\"nativesintech\") {
      membersWithRole(first: 100) {
        edges {
          node {
            ...on User {
              name
              bio
              avatarUrl
              email
              company
              websiteUrl
              location
              login
            }
          }
        }
      }
    }
  }`;

  const query = JSON.stringify({ query: graphQLQuery });

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: query,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  const response: Response = await res.json();

  return {
    props: {
      users: response.data.organization.membersWithRole.edges,
    },
  };
};
