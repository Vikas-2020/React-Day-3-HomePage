import { useState } from 'react';
// import './App.css';
import './css/navbar.css'
import Navbar from './components/Navbar';

import './css/section1.css'
import Section1 from './components/Section1';

import './css/section2.css'
import Section2 from './components/Section2';

import './css/section3.css'
import Section3 from './components/Section3';

import './css/footer.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}

export default App;
