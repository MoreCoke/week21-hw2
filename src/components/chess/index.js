import React from 'react';

import { Square, BlackChess, WhiteChess, TransparentChess } from './style';

function Chess(props) {
  const renderChess = () => {
    let SelectedChess;
    if (props.color === 'white') {
      SelectedChess = <WhiteChess onClick={props.onClick} />;
    } else if (props.color === 'black') {
      SelectedChess = <BlackChess onClick={props.onClick} />;
    } else {
      SelectedChess = <TransparentChess onClick={props.onClick} />;
    }
    return SelectedChess;
  };

  return (
    <Square rowIdx={props.rowIdx} colIdx={props.colIdx}>
      {renderChess()}
    </Square>
  );
}

export default Chess;
