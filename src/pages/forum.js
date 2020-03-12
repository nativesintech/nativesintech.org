import Layout from '../components/layout';

function About() {
  return (
    <Layout>
      <div className='flex flex-col md:flex-row'>
      <div className="lg:w-1/2 md:w-3/4 w-10/12 mx-auto">
          {[
            {
              heading: `Lorem ipsum`,
              body: `Lorem ipsum`
            }
          ].map(section => (
            <>
              <h2 className='font-bold mb-3 text-4xl text-gray-800'>
                {section.heading}
              </h2>
              <p className='mb-6 text-gray-800 text-lg'>{section.body}</p>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default About;
