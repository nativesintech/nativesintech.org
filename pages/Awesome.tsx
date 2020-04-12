import React from "react";
import { Layout } from "../components/Layout";

export default function Awesome() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="lg:w-1/2 md:w-3/4 w-10/12 mx-auto">
          {[
            {
              heading: `Awesome Natives in Tech`,
              body: `A list of Native and non-Native developers working in the software development industry that represent or serve Native communities`,
            },
          ].map((section) => (
            <React.Fragment key={section.heading}>
              <h2 className="font-bold mb-3 text-4xl text-gray-800">
                {section.heading}
              </h2>
              <p className="mb-6 text-gray-800 text-lg">{section.body}</p>
            </React.Fragment>
          ))}
        </div>

        {/* <div className="md:ml-6 md:w-1/2">
          <img src="critter.svg" className="w-full" />
        </div> */}
      </div>
    </Layout>
  );
}