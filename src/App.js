import React from 'react';
import './App.css';
import Button from './Components/Button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h2>{}</h2>
            <Button name='INC'/>
            <Button name='DEC'/>
            <Button name='RND'/>
            {/*{store.getState()}*/}
        </div>
      </header>
    </div>
  );
}

export default App;
