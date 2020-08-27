import React from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Logo,
  LogoContent,
  HeaderOptions,
  HomeOption,
  BuiltPizzaOption,
} from './styles';

import pizzaLogo from '../../assets/logo.png';

interface HeaderProps {
  selectedTab?: string;
}

const Header: React.FC<HeaderProps> = ({ selectedTab = 'home', children }) => {
  return (
    <Container>
      <LogoContent>
        <Logo src={pizzaLogo} alt="objlogo"></Logo>
        <h1>
          Stoom <strong>Pizzas</strong>
        </h1>
        <HeaderOptions>
          <Link to="/">
            <HomeOption tab={selectedTab}>Home</HomeOption>
          </Link>

          <Link to="/montar-pizza/massa">
            <BuiltPizzaOption tab={selectedTab}>Montar Pizza</BuiltPizzaOption>
          </Link>
          {children}
        </HeaderOptions>
      </LogoContent>
    </Container>
  );
};

export default Header;
