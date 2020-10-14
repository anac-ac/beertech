import React from 'react';

import SelectOwners from './components/SelectOwners';
import AnimalsOwners from './components/AnimalsOwners';

import "./style.css";

function App() {

  return (
    <div className="App">
      <SelectOwners/>
      <AnimalsOwners/>
    </div>
  );
}

export default App;
