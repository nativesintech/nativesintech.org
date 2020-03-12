import Link from 'next/link';
import { useState } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { useRouter } from 'next/router';
function Header(href) {
  const [isActive, toggleButton] = useState(false);
  const router = useRouter();
  return (
    <>
      <header className='bg-white shadow-xl m-0'>
        <div className='flex flex-wrap md:flex-no-wrap items-center justify-between max-w-full m-0 px-4 py-6 md:px-8 '>
          <div className='flex items-center'>
            <Link href='/'>
              <a>
                <img src='NITlogo.png' className='w-12 mr-4' />{' '}
              </a>
            </Link>
            <Link href='/'>
              <a className='font-bold text-teal-500 text-2xl hidden md:block lg:block'>
                Natives In Tech
              </a>
            </Link>
          </div>
          <div className='block md:hidden flex'>
            <HamburgerSqueeze
              className='z-10'
              isActive={isActive}
              onClick={() => toggleButton(!isActive)}
              barColor={!isActive ? '#2D3748' : '#FFFFFF'}
            />
          </div>

          <ul className='hidden md:flex flex-col md:flex-row md:items-center md:justify-center text-base w-full md:w-auto mr-0'>
            {[
              { title: 'About', route: '/about' },
              { title: 'Awesome', route: '/awesome' },
              { title: 'Conference', route: '/conference' },
              { title: 'Blog', route: '/blog' },
              { title: 'Forum', route: '/forum' }
            ].map(navigationItem => (
              <li className='mt-3 md:mt-0 md:ml-6' key={navigationItem.title}>
                <Link href={navigationItem.route}>
                  <a
                    className={`${
                      router.pathname === navigationItem.route
                        ? 'font-bold underline '
                        : ' '
                    }block text-teal-500`}
                  >
                    {navigationItem.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div
        className={`${isActive} fixed bg-gray-800 h-screen w-1/2 flex flex-col right-0 md:hidden lg:hidden`}
        id='SideMenu'
      >
        <ul className='flex-col mt-16'>
          {[
            { title: 'About', route: '/about' },
            { title: 'Awesome', route: '/awesome' },
            { title: 'Conference', route: '/conference' },
            { title: 'Blog', route: '/blog' },
            { title: 'Forum', route: '/forum' }
          ].map(navigationItem => (
            <li
              className='mt-3 md:mt-0 md:ml-6'
              key={navigationItem.title + 'side'}
            >
              <Link href={navigationItem.route}>
                <a
                  className={`${
                    router.pathname === navigationItem.route
                      ? 'text-teal-500 underline '
                      : 'text-white'
                  } block ml-4 text-2xl`}
                >
                  {navigationItem.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
