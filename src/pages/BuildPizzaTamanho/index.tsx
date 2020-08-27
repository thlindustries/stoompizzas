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

interface RequestFormData {
  id: number;
  title: string;
  img: string;
  description: string;
}

const BuildPizzaTamanho: React.FC = () => {
  const [tab, setTab] = useState('');
  const [items, setItems] = useState<RequestFormData[]>([]);

  const { setTamanho } = useFood();
  const { push } = useHistory();

  const handleSelectTamanho = useCallback(
    (tamanhoName: string) => {
      setTamanho(tamanhoName);
      push('/montar-pizza/recheio');
    },
    [push, setTamanho],
  );

  useEffect(() => {
    setTab('montarPizza');

    api.get('/tamanhos').then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <Container>
      <Header selectedTab={tab} />
      <Content>
        <Card>
          <CardTitle>
            Escolha um
{' '}
            <strong>tamanho</strong> para sua pizza:
          </CardTitle>
          <CardContent>
            {items.map((item) => (
              <Item
                onClick={() => {
                  handleSelectTamanho(item.title);
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
    </Container>
  );
};

export default BuildPizzaTamanho;
