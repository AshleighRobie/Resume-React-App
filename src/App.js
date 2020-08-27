import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Education from './Education';
import NavBar from './NavBar';

/*
    main application function ( App() ), calls all components
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Ashleigh Robie
      </header>
      <NavBar/>
      <div>
        <About/>
        <Work/>
        <Education/>
        <Projects/>
      </div>
    </div>
    
  );
}

export default App;
