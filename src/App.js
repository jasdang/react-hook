import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
require("eslint/package.json"); 
var eslintPluginReactHooks = require("eslint-plugin-react-hooks")

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(28);
  const [fruit, setFruit] = useState('banana');
  return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    {/* unlike this.setState in a class, updating a state variable always replaces it instead of merging it. */}
  </div>
    );
}

export default App;
