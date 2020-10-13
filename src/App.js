import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
require("eslint/package.json"); // eslint is a peer dependency. 
var eslintPluginReactHooks = require("eslint-plugin-react-hooks")

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(28);
  const [fruit, setFruit] = useState('banana');
  return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>
    );
}

export default App;
