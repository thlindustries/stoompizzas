import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import {
  HeaderAnimation,
  Container,
  Content,
  SuperMessage,
  Details,
  ButtonRow,
  StyledButton,
} from './styles';
import Header from '../../Components/Header';

import { useFood } from '../../hooks/food';

const Landing: React.FC = () => {
  const { clearPizza } = useFood();
  const { push } = useHistory();
  const [tab, setTab] = useState('');

  const handleBuildPizza = useCallback(() => {
    push('/montar-pizza/massa');
    clearPizza();
  }, [clearPizza, push]);

  useEffect(() => {
    setTab('home');
  }, []);

  return (
    <Container>
      <HeaderAnimation>
        <Header selectedTab={tab} />
      </HeaderAnimation>
      <Content>
        <SuperMessage>
          Bem vindos ao <strong>Stoom</strong> Pizzas
        </SuperMessage>
        <Details>Monte sua pizza do jeito que você preferir !</Details>
        <ButtonRow onClick={handleBuildPizza}>
          <StyledButton>Montar sua pizza </StyledButton>
        </ButtonRow>
      </Content>
    </Container>
  );
};

export default Landing;
