const Newsletter = () => {
  return (
    <div className='shadow-xl p-10 bg-white max-w-xl rounded mx-auto'>
      <h1 className='text-4xl font-bold mb-4 text-gray-800'>
        Join our mailing list
      </h1>
      <p className='text-base text-gray-800'>
        Get the latest news from Natives in Tech. No spam. Unsubscribe at any
        time.
      </p>
      <div className='mb-4 relative'>
        <input
          className='input border border-gray-400 appearance-none rounded w-full px-3 py-2 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
          type='email'
          placeholder='Email'
        />
      </div>
      <button className='bg-teal-500 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded'>
        Subscribe
      </button>
    </div>
  );
};
export default Newsletter