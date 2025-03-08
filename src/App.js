import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
