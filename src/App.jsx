import React, { useState } from 'react';

import Header from './components/Header';
import Switch from './components/Switch';
import Pricing from './components/Pricing';

import bg1image from './assets/img/bg-bottom.svg';
import bg2image from './assets/img/bg-top.svg';

import './helpers.css'
import './reset.css'
import './App.css';




const App = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleSwitchClick = () => {
    setIsMonthly(!isMonthly);
  }
  return (
    <div className="App">
      <img src={bg1image} alt="" className="bg-img bg-img-1" />
      <img src={bg2image} alt="" className="bg-img bg-img-2" />
      <Header />
      <Switch isMonthly={isMonthly} onSwitchClick={handleSwitchClick}/>
      <Pricing isMonthly={isMonthly}/>
    </div>
  );
}

export default App;
