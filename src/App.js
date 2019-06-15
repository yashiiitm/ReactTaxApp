import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tabcontainer from './components/Tabcontainer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Tabcontainer></Tabcontainer>
    </div>
  );
}

export default App;
