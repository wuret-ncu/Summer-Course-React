import './App.css';
import React from 'react';
import Noob from './components/Noob/Noob.js'
import Advanced from './components/Advanced/Advanced.js'
import Pro from './components/Pro/Pro.js'
import Bug from './components/Pro/Bug.js'

// Ref
function App(props) {
  return (
    <>
      <Noob initialCount={1} />
      <Advanced initialCount={1} />
      <Bug initialCount={1} />
      <Pro initialCount={1} />
    </>
  )
}

export default App;

