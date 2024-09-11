import './App.css'
import React from 'react';
import {NetFlexSeries} from './components/NetFlexSeries';




export const App = () => {
  
  return (
    <>
      <div className="container">
        <h1>Netflix Movies</h1>
        <div className="card-grid">
          <NetFlexSeries></NetFlexSeries>
          <NetFlexSeries></NetFlexSeries>
          <NetFlexSeries></NetFlexSeries>
          <NetFlexSeries></NetFlexSeries>
          <NetFlexSeries></NetFlexSeries>  
        </div>
      </div>
    </>
  );
};

export default App