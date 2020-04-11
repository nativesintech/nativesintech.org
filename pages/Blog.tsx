import React from "react";
import { Layout } from "../components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="lg:w-1/2 md:w-3/4 w-10/12 mx-auto">
          {[
            {
              heading: `Blog post placeholder`,
            <React.Fragment key={section.heading}>
              <h2 className="font-bold mb-3 text-4xl text-gray-800">
                {section.heading}
              </h2>
              <p className="mb-6 text-gray-800 text-lg">{section.body}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  );
}
