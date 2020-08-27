import styled from 'styled-components';
import { loadFromLeft, loadHeader, buttonRow } from './animations';

import Button from '../../Components/Button';

export const HeaderAnimation = styled.div`
  animation: ${loadHeader} 1.3s;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;

  margin-top: 10%;

  padding: 0 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: 'Poppins';

  animation: ${loadFromLeft} 1.3s;
`;

export const SuperMessage = styled.h1`
  color: #d9d9d9;
  font-size: 48px;
  strong {
    color: #a80f0f;
  }
`;

export const Details = styled.p`
  color: #d9d9d9;

  font-size: 18px;
`;

export const ButtonRow = styled.div`
  margin-top: 48px;

  animation: ${buttonRow} 1.5s;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;

  width: 400px;
  height: 90px;
`;
