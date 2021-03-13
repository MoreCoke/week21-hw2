import React from 'react';

import { Container, BlackChess, WhiteChess } from './style';

function Chess(props) {
  const SelectedChess = props.isBlack ? <BlackChess /> : <WhiteChess />;
  return <Container>{SelectedChess}</Container>;
}

export default Chess;
