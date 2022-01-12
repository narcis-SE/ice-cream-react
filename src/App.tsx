import React from 'react';
import Header from './components/header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';
import Ad from './components/Ad';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header user="Chirpus"/>
      <Ad flavor="Chocolate" fontSize={25} darkTheme={true} />
      <Ad flavor="Vanilla" fontSize={25} darkTheme ={false} />
      <Ad flavor="Strawberry" fontSize={25} darkTheme={true} />
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
