import './App.css';
import React from 'react';
import Calculator from './components/calculator';
import Heading from './components/heading';
import Quote from './components/quote';

function App() {
  return (
    <>
      <Heading />
      <Calculator />
      <Quote />
    </>
  );
}

export default App;
