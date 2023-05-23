import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import React from 'react';



function App() {
  
  return (
    <div className='App-header'>
      <Header></Header>
      <Courses></Courses>
    </div>
  )
};

export default App;
