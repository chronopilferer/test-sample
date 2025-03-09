import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Test from './components/Test';
import TestArray from './components/TestArray';

import './styles/App.css'

function App() {

  const users = [
    {id:'1', name:'Alice', age:20},
    {id:'2', name:'Bob', age:21},
    {id:'3', name:'Chris', age:22},
    {id:'4', name:'David', age:23},
    {id:'5', name:'Ella', age:24}
  ]

  return (
    <div className="App">
      <Header/>
      <nav>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      <TestArray users={users} /> 

      <Footer/>

    </div>
  );
}

export default App;
