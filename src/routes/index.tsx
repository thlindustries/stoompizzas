import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Landing from '../pages/Landing';
import BuildPizzaMassa from '../pages/BuildPizzaMassa';
import BuildPizzaTamanho from '../pages/BuildPizzaTamanho';
import BuildPizzaRecheio from '../pages/BuildPizzaRecheio';
import Finish from '../pages/Finish';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/montar-pizza/massa" component={BuildPizzaMassa} />
      <Route path="/montar-pizza/tamanho" component={BuildPizzaTamanho} />
      <Route path="/montar-pizza/recheio" component={BuildPizzaRecheio} />
      <Route path="/finalizar" component={Finish} />
    </Switch>
  );
};

export default routes;
