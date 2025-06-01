import React from 'react';
import Hero from '../../components/Home/Hero';
import Features from '../../components/Home/Features';
import './home.css';
import logo from '../../assets/screenshot_7_1_1.webp'

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Features />
    </section>
  );
};

export default Home;