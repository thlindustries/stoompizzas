import styled from 'styled-components';
import { loadItem, loadFromOpacity } from './animations';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;

  padding: 20px 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: 'Poppins';
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

export const CardContent = styled.div`
  margin-top: 60px;

  width: 90%;
  border-radius: 12px;
  /* box-shadow: 0 0 10px #000; */

  padding: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Item = styled.div`
  width: 400px;
  margin-left: 24px;

  padding: 12px;

  border-radius: 12px;
  box-shadow: 0 0 10px #000;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: background-color 0.4s, transform 1.2s;

  animation: ${loadItem} 1.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transform: scaleY(1.09);

    h1 {
      color: #fff;
    }
  }
`;
export const ItemImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 12px;
`;

export const ItemTitle = styled.h1`
  color: #b36800;
`;

export const ItemDescription = styled.p`
  font-size: 12px;
`;
