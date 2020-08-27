import styled from 'styled-components';
import { loadFromOpacity } from './animations';

import Button from '../../Components/Button';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  font-family: 'Poppins';
`;

export const Content = styled.div`
  width: 100%;

  padding: 20px 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  background: rgba(217, 217, 217, 0.9);
  box-shadow: 0 0 10px #000;

  border-radius: 12px;

  width: 85%;
  height: 850px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  padding: 32px;
`;

export const CardContent = styled.div`
  width: 100%;

  border-radius: 12px;
  /* border: solid 2px #000; */

  padding: 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitle = styled.h1`
  color: #b36800;
  font-size: 42px;
  margin-top: 20px;

  animation: ${loadFromOpacity} 1.2s;

  strong {
    color: #a80f0f;
    font-size: 64px;
  }
`;

export const ProductDescription = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;

  margin-bottom: auto;

  margin-right: 8%;
`;

export const ItemImage = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 12px;

  margin-right: 4em;

  margin-bottom: auto;
`;

export const ItemTitle = styled.h1`
  font-size: 64px;

  border-bottom: 3px solid #a80f0f;

  color: #b36800;
`;

export const ItemDescription = styled.div`
  font-size: 18px;
  color: #636363;

  ul {
    margin-top: 24px;

    li {
      & + li {
        margin-top: 12px;
      }
    }
  }
`;

export const PointsContainer = styled.div`
  margin-top: 4em;

  color: #636363;

  h1 {
    font-size: 32px;

    border-bottom: 3px solid #a80f0f;

    color: #b36800;
  }

  p {
    margin-top: 24px;
  }

  strong {
    color: #a80f0f;
    font-size: 24px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 2em;
`;
