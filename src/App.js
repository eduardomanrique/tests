import React, { useState, useEffect } from 'react';
import './App.css';

const gridSize = 20;
const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));

function App() {
  const [snake, setSnake] = useState([[0, 0]]);
  const [direction, setDirection] = useState('RIGHT');
  const [food, setFood] = useState([5, 5]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.keyCode) {
        case 37: setDirection('LEFT'); break;
        case 38: setDirection('UP'); break;
        case 39: setDirection('RIGHT'); break;
        case 40: setDirection('DOWN'); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      let newSnake = [...snake];
      let head = newSnake[newSnake.length - 1];

      switch (direction) {
        case 'RIGHT': head = [head[0], head[1] + 1]; break;
        case 'LEFT': head = [head[0], head[1] - 1]; break;
        case 'DOWN': head = [head[0] + 1, head[1]]; break;
        case 'UP': head = [head[0] - 1, head[1]]; break;
        default: break;
      }

      newSnake.push(head);
      newSnake.shift();

      setSnake(newSnake);
    };

    const interval = setInterval(moveSnake, 200);

    return () => clearInterval(interval);
  }, [snake, direction]);

  return (
    <div className="App">
      {grid.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <div key={j} className={`cell ${snake.some(segment => segment[0] === i && segment[1] === j) ? 'snake' : ''} ${food[0] === i && food[1] === j ? 'food' : ''}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;