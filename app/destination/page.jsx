'use client';
import './index.scss';
import Navbar from '../component/navbar/Navbar';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Destination = () => {
  const sections = ['MOON', 'MARS', 'EUROPA', 'TITAN'];
  const [data, setData] = useState(null);
  const [picked, setPicked] = useState(0);

  // fetch data
  const trigger = () => {
    fetch('/data.json', {
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setData(data.destinations);
      });
  };
  // trigger fetch
  useEffect(() => {
    trigger();
  }, []);

  //  interchange data function
  const interchange = (index) => {
    setPicked(index);
  };
  return (
    <div className='dest-container'>
      <Navbar />
      <main>
        <h5>
          <span>01</span>
          Pick your destination
        </h5>
        <div className='static-content'>
          <div className='sections'>
            {sections.map((section, index) => {
              return (
                <div
                  key={index}
                  className={`${index === picked ? 'activeOption' : 'option'}`}
                  onClick={() => interchange(index)}
                >
                  {section}
                </div>
              );
            })}
          </div>
        </div>
        {data !== null && data.length > 0 && (
          <div className='dynamic-content'>
            <Image
              src={data[picked].images.png}
              width={500}
              height={500}
              alt='destination image'
              className='Img'
            />
            <div className='write-up'>
              <h1>{data[picked].name}</h1>
              <p>{data[picked].description}</p>
              <div className='location'>
                <div className='distance'>
                  <h6>AVG. DISTANCE</h6>
                  <h4>{data[picked].distance}</h4>
                </div>
                <div className='travel-time'>
                  <h6>Est. travel time</h6>
                  <h4>{data[picked].travel}</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Destination;
