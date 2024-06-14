import React from 'react';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import './app.css';




const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
