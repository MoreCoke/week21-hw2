import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const Container = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.alpha};
  border: 0.5px solid black;
  position: relative;
`;

export const CircleButton = styled.button`
  border-radius: 50%;
  outline: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
`;

export const BlackChess = styled(CircleButton)`
  background-color: black;
`;

export const WhiteChess = styled(CircleButton)`
  background-color: white;
`;
