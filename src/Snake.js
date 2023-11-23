import React, { useState, useEffect } from 'react';
import './Snake.css';
import { Link } from 'react-router-dom';

const gridSize = 20;
const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));

function Snake() {
  const [snake, setSnake] = useState([[0, 0]]);
  const [direction, setDirection] = useState('RIGHT');
  const [food, setFood] = useState([5, 5]);
  const [gameOver, setGameOver] = useState(false);

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

      if (head[0] < 0 || head[1] < 0 || head[0] >= gridSize || head[1] >= gridSize || newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
        setGameOver(true);
        return;
      }

      newSnake.push(head);

      if (head[0] === food[0] && head[1] === food[1]) {
        setFood([Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]);
      } else {
        newSnake.shift();
      }

      setSnake(newSnake);
    };

    if (!gameOver) {
      const interval = setInterval(moveSnake, 200);
      return () => clearInterval(interval);
    }
  }, [snake, direction, food, gameOver]);

  const restartGame = () => {
    setSnake([[0, 0]]);
    setDirection('RIGHT');
    setFood([5, 5]);
    setGameOver(false);
  };

  return (
    <div className="Snake">
      {gameOver ? (
        <div className="game-over-container">
          <h1>Game Over</h1>
          <button onClick={restartGame}>Play Again</button>
          <Link to="/">Back to Home</Link>
        </div>
      ) : (
        grid.map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, j) => (
              <div key={j} className={`cell ${snake.some(segment => segment[0] === i && segment[1] === j) ? 'snake' : ''} ${food[0] === i && food[1] === j ? 'food' : ''}`}></div>
            ))}
          </div>
        ))
      )
      }
    </div >
  );
}

export default Snake;