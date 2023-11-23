import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const calcScore = useCallback(() => {
    // We have score
    if (rowsCleared > 0) {
      // This is how original Tetris score is calculated
      setScore(prev => prev + (rowsCleared === 1 ? 40 : 100));
      setRows(prev => prev + rowsCleared);
    }
  }, [rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score, rows]);

  return [score, setScore, rows, setRows, level, setLevel];
};