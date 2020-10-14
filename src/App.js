import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
require("eslint/package.json"); 
var eslintPluginReactHooks = require("eslint-plugin-react-hooks")

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    {/* unlike this.setState in a class, updating a state variable always replaces it instead of merging it. */}
  </div>
    );
}

export default App;
