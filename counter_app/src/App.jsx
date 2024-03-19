import './app.css';
import { useState } from 'react';
function App() {
  let [count, setCount] = useState(5);

  const Derement = () => {
    setCount(count - 1);
  };
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="main-container">
      <h1>Counter App</h1>
      <div className="container">
        <button onClick={Derement}>Decrement</button>
        <h2>{count}</h2>
        <button onClick={Increment}>Increment</button>
      </div>
    </div>
  );
}

export default App;
