import React from "react";
import { Layout } from "../components/Layout";
import { GetStaticProps } from "next";
import Head from "next/head";

type User = {
  name: string | null;
  bio: string | null;
  avatarUrl: string | null;
  email: string | null;
  company: string | null;
  websiteUrl: string | null;
  location: string | null;
  login: string | null;
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
      <Head>
        <title>Natives in Tech - Awesome</title>
      </Head>
      <section className="text-center bg-gray-200 py-24 px-4 md:px-8">
        <h1 className="font-bold mb-3 text-6xl">Awesome Natives in Tech</h1>
        <p className="mb-6 prose prose-lg text-lg max-w-screen-md mx-auto">
          A list of Native technologists that represent or serve Native
          communities
        </p>
      </section>

      <section
        className="p-4 md:p-8 grid gap-4 md:gap-16"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
        }}
      >
        {users.map((user) => {
          const jobAndLocation = [user.node.company, user.node.location]
            .filter((v) => typeof v === "string" && v.length > 0)
            .join(" | ");

          return (
            <div
              key={user.node?.login ?? "user-key"}
              className="shadow-lg rounded-lg mt-16"
            >
              <div
                className="bg-cover rounded-lg rounded-b-none"
                style={{
                  backgroundImage: `url(${user.node.avatarUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 350,
                }}
              />
              <div className="p-4">
                <div>
                  <span className="text-xl uppercase"> {user.node.name}</span>
                </div>
                <div className="mb-2">{jobAndLocation}</div>
                <div>{user.node.bio}</div>
              </div>
            </div>
          );
        })}
      </section>
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
