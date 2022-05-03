import React from 'react';
import Carteira from './components/pages/Carteira.Component';
import NavBar from './components/utils/NavBar.Component';
import Menu from './components/utils/Menu.Component'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carteira />
      <Menu />
    </div>
  );
}


export default App;
