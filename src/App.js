import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';
import CourseDetail from './components/CourseDetail/CourseDetail';



function App() {
  
  return (
    <div className='App-header'>
      <BrowserRouter>
        <Routes>
          <Route path='/course' element={<Courses/>}> </Route>
          <Route path='/' element={<Courses/>}> </Route>
          <Route path='*' element={<NoMatch/>}> </Route>
          <Route path='/course/:key' element={<CourseDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
