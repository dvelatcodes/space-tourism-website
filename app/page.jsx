'use client';
import './index.scss';
import Navbar from './component/navbar/Navbar';

export default function Home() {
  return (
    <div className='homeContainer'>
      <Navbar />
      <main></main>
    </div>
  );
}
