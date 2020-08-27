import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useFood } from '../../hooks/food';

import {
  Container,
  Content,
  Card,
  CardTitle,
  CardContent,
  ProductDescription,
  ItemTitle,
  ItemImage,
  ItemDescription,
  PointsContainer,
  StyledButton,
} from './styles';

import Header from '../../Components/Header';

interface RecommendedRequestFormData {
  recomendado: string;
}

interface BeneficiosRequestFormData {
  pontos: number;
}

const BuildPizzaTamanho: React.FC = () => {
  const [tab, setTab] = useState('');
  const [recommended, setRecommended] = useState<RecommendedRequestFormData>({
    recomendado: '',
  });
  const [beneficios, setBeneficios] = useState<BeneficiosRequestFormData>({
    pontos: 0,
  });

  const { pizza } = useFood();
  const { push } = useHistory();

  const earnPoints = useMemo(() => recommended.recomendado === pizza.recheio, [
    pizza.recheio,
    recommended.recomendado,
  ]);

  const handleFinish = useCallback(() => {
    push('/');
  }, [push]);

  useEffect(() => {
    setTab('montarPizza');

    api.get<RecommendedRequestFormData>('/recomendado').then((response) => {
      setRecommended(response.data);
    });

    api.get<BeneficiosRequestFormData>('/beneficios').then((response) => {
      if (recommended.recomendado === pizza.recheio) {
        api
          .post('/beneficios', {
            pontos: response.data.pontos + 20,
          })
          .then(() => setBeneficios({ pontos: response.data.pontos + 20 }));
      } else {
        setBeneficios(response.data);
      }
    });
  }, [earnPoints, pizza.recheio, recommended.recomendado]);

  return (
    <Container>
      <Header selectedTab={tab} />
      <Content>
        <Card>
          <CardTitle>
            A <strong>Stoom</strong> agradece seu pedido, tenha um ótimo
            apetite!
          </CardTitle>
          <CardContent>
            <ItemImage
              src="https://image.freepik.com/fotos-gratis/cozinheiro-chefe-masculino-no-uniforme-branco-que-faz-o-sinal-saboroso-contra-o-fundo-cinzento_23-2147863837.jpg"
              alt="item.title"
            />
            <ProductDescription>
              <ItemTitle>Sua pizza:</ItemTitle>
              <ItemDescription>
                <ul>
                  <li>{pizza.massa}</li>
                  <li>{pizza.tamanho}</li>
                  <li>{pizza.recheio}</li>
                </ul>
              </ItemDescription>
              <PointsContainer>
                <h1>Pontos de benefícios:</h1>
                {earnPoints ? (
                  <p>
                    Você adquiriu <strong>{20}</strong> pontos por comprar a
                    pizza recomendada :D
                  </p>
                ) : (
                    <p>Você não adquiriu pontos nesta compra.</p>
                  )}

                <p>
                  Pontuação total: <strong>{beneficios.pontos}</strong>
                  {' stoom points'}
                </p>
              </PointsContainer>
              <StyledButton onClick={handleFinish}>
                Montar outra pizza
              </StyledButton>
            </ProductDescription>
          </CardContent>
        </Card>
      </Content>
    </Container>
  );
};

export default BuildPizzaTamanho;
