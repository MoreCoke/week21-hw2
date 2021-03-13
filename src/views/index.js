import React from 'react';

import { Container, Checkerboard, Row } from './style';
import Chess from '../components/chess';

function App() {
  const foo = new Array(3).fill(new Array(3).fill(null));
  return (
    <Container>
      <Checkerboard>
        {foo.map((row, rowIndex) => (
          <Row key={`row-${rowIndex}`}>
            {row.map((col, colIndex) => (
              <Chess key={colIndex} />
            ))}
          </Row>
        ))}
      </Checkerboard>
    </Container>
  );
}

export default App;
