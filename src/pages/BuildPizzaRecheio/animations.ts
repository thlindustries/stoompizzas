import { keyframes } from 'styled-components';

export const loadFromOpacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const loadItem = keyframes`
from{
    opacity: 0;
    transform: translateX(-250px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
