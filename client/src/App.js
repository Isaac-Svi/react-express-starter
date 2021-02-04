import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';

const App = () => {
  const [res, setRes] = useState('');
  useEffect(() => {
    // test route to ensure proxy is working
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => setRes(data.msg))
      .catch((err) => {
        setRes('PROXY ERROR');
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      <h1>React-Express Starter</h1>
      <div>
        {res}
        <Loader />
      </div>
      <div className='details'>
        <p>
          Checkout the <a href=''>Github Repo</a>
        </p>
        <p className='cp'>© Isaac Svi 2021</p>
      </div>
    </div>
  );
};

export default App;
