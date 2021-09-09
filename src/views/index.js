import React from 'react';

import { Container, Checkerboard, Row } from './style';
import Chess from '../components/chess';
import useGame from '../hooks/useGame';

function App() {
  const { game, chessColor, updateGame, updateChessColor } = useGame();

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
