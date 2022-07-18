import React from 'react';
import { Navbar } from './components';
import { About, Contact, Header, Skills, Testimonial, Works } from './containers';
import './App.scss';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
