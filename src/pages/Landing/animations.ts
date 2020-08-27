import { keyframes } from 'styled-components';

export const loadFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const loadHeader = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const buttonRow = keyframes`
  from{
    opacity: 0;
    transform: translateX(-150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
