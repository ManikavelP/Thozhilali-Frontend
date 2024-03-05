import './App.css'
import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Job from './components/job/job';
import Search from './components/search/search';
import Value from './components/value/value';

function App() {
  return (
      <div>
    <Nav/>
    <Search/>
    <Job/>
    <Value/>
    <Footer/>

      </div>
  );
}

export default App
