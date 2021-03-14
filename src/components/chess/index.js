import React from 'react';

import { Square, BlackChess, WhiteChess } from './style';

function Chess(props) {
  const SelectedChess = props.isBlack ? <BlackChess /> : <WhiteChess />;
  return (
    <Square rowIdx={props.rowIdx} colIdx={props.colIdx}>
      {SelectedChess}
    </Square>
  );
}

export default Chess;
