import React from 'react';

import {
  Container,
  Content,
  Card,
  Wrapper,
  CardHeader,
  DescriptionContainer,
  Description,
  Title,
  StyledButton,
} from './styles';

interface AlertProps {
  buttonFunction?(): void;
  recommended?: string;
}

const Alert: React.FC<AlertProps> = ({ buttonFunction, recommended }) => {
  return (
    <Container>
      <Content>
        <Card>
          <Wrapper>
            <CardHeader>
              <Title>
                <strong>Stoom</strong> Pizzas agradece sua visita
              </Title>
            </CardHeader>
            <DescriptionContainer>
              <Description>
                <p>Para montar sua pizza siga os seguintes passos:</p>
                <ul>
                  <li>
                    Selecione sua <strong>massa</strong>,{' '}
                    <strong>tamanho</strong>
                    {' e '}
                    <strong>recheio</strong> clicando no card do item.
                  </li>
                  <li>Devore sua deliciosa pizza!</li>
                </ul>
                <h2>
                  PIZZA RECOMENDADA:{' '}
                  <strong>
                    {recommended || 'Erro ao carregar pizza recomendada'}
                  </strong>
                </h2>
              </Description>
            </DescriptionContainer>
            <StyledButton onClick={buttonFunction}>Ok</StyledButton>
          </Wrapper>
        </Card>
      </Content>
    </Container>
  );
};

export default Alert;
