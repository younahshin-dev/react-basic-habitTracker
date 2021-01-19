
import React from 'react';
import './app.css';

function App() {
  const name = undefined;
  return (
    <>
      <h1>test</h1>
      <h1>world</h1>
      {name && <h1>hello {name}</h1>}
    </>
  );

}

export default App;
