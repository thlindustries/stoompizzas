import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useFood } from '../../hooks/food';

import {
  Container,
  Content,
  Card,
  CardTitle,
  CardContent,
  Item,
  ItemTitle,
  ItemImage,
  ItemDescription,
} from './styles';

import Header from '../../Components/Header';
import Alert from '../../Components/Alert';

interface RequestFormData {
  id: number;
  title: string;
  img: string;
  description: string;
}

interface RecommendedRequestFormData {
  recomendado: string;
}

const BuildPizzaMassa: React.FC = () => {
  const [tab, setTab] = useState('');
  const [recommended, setRecommended] = useState<RecommendedRequestFormData>({
    recomendado: '',
  });
  const [items, setItems] = useState<RequestFormData[]>([]);
  const [alert, triggerAlert] = useState(true);

  const { setMassa } = useFood();
  const { push } = useHistory();

  const handleSelectMassa = useCallback(
    (massaName: string) => {
      setMassa(massaName);
      push('/montar-pizza/tamanho');
    },
    [push, setMassa],
  );

  const handleTriggerAlert = useCallback(() => {
    triggerAlert(false);
  }, []);

  useEffect(() => {
    setTab('montarPizza');

    api.get('/massas').then((response) => {
      setItems(response.data);
    });

    api.get<RecommendedRequestFormData>('/recomendado').then((response) => {
      setRecommended(response.data);
    });
  }, []);

  return (
    <Container>
      <Header selectedTab={tab} />

      {alert ? (
        <Alert
          recommended={recommended.recomendado}
          buttonFunction={handleTriggerAlert}
        />
      ) : (
          <Content>
            <Card>
              <CardTitle>
                Escolha uma <strong>massa</strong> para sua pizza:
            </CardTitle>
              <CardContent>
                {items.map((item) => (
                  <Item
                    onClick={() => {
                      handleSelectMassa(item.title);
                    }}
                    key={item.id}
                  >
                    <ItemImage src={item.img} alt={item.title} />
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDescription>{item.description}</ItemDescription>
                  </Item>
                ))}
              </CardContent>
            </Card>
          </Content>
        )}
    </Container>
  );
};

export default BuildPizzaMassa;
