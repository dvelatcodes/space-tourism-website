'use client';
import './index.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <header>
      <Image
        src='/logo.svg'
        alt='Logo'
        width={48}
        height={48}
        quality={100}
        className='logo'
      />
      <nav>
        <div>
          <Link
            href='/'
            className={`home ${'/' === active ? 'active' : ''}`}
          >
            <span>00</span> HOME
          </Link>
          <Link
            href='/destination'
            className={`destination ${
              '/destination' === active ? 'active' : ''
            }`}
          >
            <span>01</span> DESTINATION
          </Link>
          <Link
            href='/crew'
            className={`crew ${'/crew' === active ? 'active' : ''}`}
          >
            <span>02</span> CREW
          </Link>
          <Link
            href='/technology'
            className={`technology ${'/technology' === active ? 'active' : ''}`}
          >
            <span>03</span> TECHNOLOGY
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
