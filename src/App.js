import React from 'react';

import { Footer, Blog, Possibility, WhatGPT3, Features, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return <div class="App">
      <div class="gradient__bg">
        g
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
  </div>;
};

export default App;
