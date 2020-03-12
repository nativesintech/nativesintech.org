import Header from './header';

function Layout(props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-1 w-full p-4 mx-auto md:px-8 md:py-16 bg-gray-200'>
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
