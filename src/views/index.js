import React, { useState, useCallback } from 'react';

import { Container, Checkerboard, Row } from './style';
import Chess from '../components/chess';

function App() {
  const [game, setGame] = useState(new Array(20).fill(new Array(20).fill(null)));
  const [chessColor, setChessColor] = useState('black');
  const updateGame = useCallback((r, c, color) => {
    const newGame = game.map((row, rowIdx) => {
      if (rowIdx === r) {
        const newRow = row.map((col, colIdx) => {
          if (colIdx === c && col === null) {
            return color;
          }
          return col;
        });
        return newRow;
      }
      return row;
    });
    setGame(newGame);
  });
  const updateChessColor = useCallback(() => {
    if (chessColor === 'black') {
      setChessColor('white');
      return;
    }
    setChessColor('black');
  });

  return (
    <Container>
      <Checkerboard>
        {game.map((row, rowIndex) => (
          <Row key={`row-${rowIndex}`}>
            {row.map((col, colIndex) => (
              <Chess
                rowIdx={rowIndex}
                colIdx={colIndex}
                key={`col-${colIndex}`}
                onClick={() => {
                  updateGame(rowIndex, colIndex, chessColor);
                  updateChessColor();
                }}
                color={col}
              />
            ))}
          </Row>
        ))}
      </Checkerboard>
    </Container>
  );
}

export default App;
