import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Test from './components/Test';

import './styles/App.css'

function App() {
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

      <Test text='props 전달 테스트'></Test>

      <Footer/>
    </div>
  );
}

export default App;
