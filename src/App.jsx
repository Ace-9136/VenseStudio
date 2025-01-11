import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import StudentShowcase from './components/StudentShowcase';
import Footer from './components/Footer';
import './App.css';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className="App">
      <Analytics />
      <Header />
      <main>
        <Hero />
        <About />
        <StudentShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;

