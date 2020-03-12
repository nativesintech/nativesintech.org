import Layout from '../components/layout';

function Home() {
  return (
    <Layout>
      <div className='flex flex-col lg:flex-row items-center justify-center mx-8'>
        <h2 className=' my-8 p-3 text-5xl lg:text-6xl text-gray-800 text-center leading-tight'>
          Supporting software developers serving Native communities{' '}
        </h2>
        <img src='computer.svg' className='w-64 lg:w-1/4' />
      </div>
    </Layout>
  );
}

export default Home;
