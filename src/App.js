import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import Education from './Education';

/*
    main application function, calls all components
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Ashleigh Robie
      </header>
      <About/>
      <Work/>
      <Education/>
      <Projects/>
    </div>
    
  );
}

export default App;
