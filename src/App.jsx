import React, {useEffect, useState} from 'react';
import './style.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Schedule from './pages/Schedule';
import Groups from './pages/Groups';
import Teams from './pages/Teams';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
<Router>
  <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/schedule" element={<Schedule/>}/>
    <Route path="/groups" element={<Groups/>}/>
    <Route path="/teams" element={<Teams/>}/>
    <Route path="/store" element={<Store/>}/>
  </Routes>
  <Footer/>
</Router>


    // <div className="app">
    //   <button onClick={googleSignInWithGoogle} className='btn btn-primary'>google</button>
    // </div>
  );
};

export default App;