import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button
            onClick={() => setColor('red')}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>

          <button
            onClick={() => setColor('green')}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: 'Green' }}
          >
            Green
          </button>

          <button
            onClick={() => setColor('blue')}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor('grey')}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: 'grey' }}
          >
            Grey
          </button>

          <button
            onClick={() => setColor('yellow')}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor('violet')}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: 'violet' }}
          >
            Voilet
          </button>

          <button
            onClick={() => setColor('purple')}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor('cyan')}
            className="outline-none px-4 rounded-full"
            style={{ backgroundColor: 'cyan' }}
          >
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
