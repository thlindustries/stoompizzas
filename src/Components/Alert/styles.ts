import styled, { keyframes } from 'styled-components';

import Button from '../Button';

const loadFromOpacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: absolute;

  width: 100vw;
  height: 100vh;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.6);

  animation: ${loadFromOpacity} 1.4s;

  font-family: 'Poppins';
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 600px;
  height: 600px;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;

  padding: 24px;
`;

export const Wrapper = styled.div`
  background: rgba(217, 217, 217, 0.9);
  width: 100%;
  height: 100%;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;
`;

export const CardHeader = styled.div`
  margin-top: 2em;
`;

export const Title = styled.h1`
  text-align: center;

  width: 700px;

  strong {
    color: #a80f0f;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;
`;

export const Description = styled.div`
  p {
    text-align: center;
    font-size: 20px;
    color: #b36800;
    font-weight: bold;
  }

  ul {
    margin-top: 2em;

    width: 400px;

    > li {
      width: 500px;
    }

    li {
      & + li {
        margin-top: 8px;
      }
    }
  }

  strong {
    color: #a80f0f;
  }

  h2 {
    font-size: 32px;
    margin-top: 6%;
    text-align: center;

    strong {
      border-bottom: 3px solid #a80f0f;
    }
  }
`;

export const StyledButton = styled(Button)`
  margin-top: auto;
`;
