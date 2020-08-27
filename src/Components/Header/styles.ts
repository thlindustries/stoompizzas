import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface HeaderProps {
  tab?: string;
}

export const Container = styled.header`
  background: rgba(0, 0, 0, 0.4);

  width: 100%;

  border-radius: 0 0 10px 10px;
  box-sizing: border-box;

  padding: 0 128px;

  display: flex;
`;

export const LogoContent = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #d9d9d9;
    margin-left: 30px;

    strong {
      color: #a80f0f;
    }
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: auto;

  a {
    text-decoration: none;
  }

  p {
    margin-right: 48px;
    color: #fff;

    transition: color 0.4s;

    font-family: 'Poppins';
    font-size: 18px;

    &:hover {
      cursor: pointer;
      color: ${shade(0.4, '#bdbdbd')};
    }
  }
`;

export const HomeOption = styled.p<HeaderProps>`
  ${(props) =>
    props.tab === 'home' &&
    css`
      border-bottom: 1px solid #a6a6a6;
    `}
`;

export const BuiltPizzaOption = styled.p<HeaderProps>`
  ${(props) =>
    props.tab === 'montarPizza' &&
    css`
      border-bottom: 1px solid #a6a6a6;
    `}
`;

export const Logo = styled.img`
  height: 80px;

  opacity: 1;
`;
