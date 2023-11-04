'use client';
import { useState, useEffect } from 'react';
import './index.scss';

// components
import Navbar from '../component/navbar/Navbar';

const Crew = () => {
  const crewSize = [0, 1, 2, 3];
  const [data, setData] = useState(null);
  const [picked, setPicked] = useState(0);

  // fetch function to retrieve json data from public directory
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson.crew);
      });
  };
  // useEffect triggers the function
  useEffect(() => {
    getData();
  }, []);

  // select function for crew
  const showCrew = (index) => {
    setPicked(index);
  };

  return (
    <div className='crewContainer'>
      <Navbar />

      <main>
        <div className='crew-content'>
          <h5>
            <span>02</span>
            Meet your crew
          </h5>
          {data !== null && data.length > 0 && <h4>{data[picked].role}</h4>}
          {data !== null && data.length > 0 && <h3>{data[picked].name}</h3>}
          {data !== null && data.length > 0 && <p>{data[picked].bio}</p>}
          <div className='circles'>
            {crewSize.map((crew, index) => (
              <div
                className='single-circle'
                key={index}
                onClick={() => showCrew(index)}
              ></div>
            ))}
          </div>
        </div>
        {/* <Image src={} alt=''/> */}
      </main>
    </div>
  );
};

export default Crew;