'use client';
import './index.scss';
import Navbar from '../component/navbar/Navbar';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Technology = () => {
  const circles = [1, 2, 3];
  const [picked, setPicked] = useState(0);
  const [data, setData] = useState(null);
  // get tech data
  const getData = () => {
    fetch('/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setData(data.technology);
      });
  };
  // trigger picked function
  const trigger = (index) => {
    setPicked(index);
  };
  // call tech data
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='techContainer'>
      <Navbar />
      <main className='tech-main'>
        <h5>
          <span>03</span>
          SPACE LAUNCH 101
        </h5>
        <div className='tech-sections'>
          <div className='tech-circles'>
            {circles.map((circle, index) => {
              return (
                <div
                  key={index}
                  className={`${picked === index ? 'activeCircle' : 'circle'}`}
                  onClick={() => trigger(index)}
                >
                  {<span>{circle}</span>}
                </div>
              );
            })}
          </div>
          {data !== null && data.length > 0 && (
            <div className='tech-content'>
              <div className='content'>
                <h6>THE TERMINOLOGY…</h6>
                <h1>{data[picked].name}</h1>
                <p>{data[picked].description}</p>
              </div>
              <Image
                src={data[picked].images.portrait}
                alt='tech-image'
                width={515.311}
                height={527}
                className={`tImg`}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Technology;
