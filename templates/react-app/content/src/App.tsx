import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <picture>
          <img src="/logo.webp" alt="logo" />
        </picture>
        <h3>${{ values.component_id }}</h3>
        <p>
          This is the default Keyhole React template.
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
