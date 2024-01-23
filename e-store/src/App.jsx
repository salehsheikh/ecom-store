import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Carousel />
      <HeroSection />
      <Routes>
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
