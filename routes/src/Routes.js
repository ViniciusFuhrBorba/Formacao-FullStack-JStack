import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    //Switch define que apenas uma rota deve ser renderizada
    //Exact define que a rota precisa contar somente o PATH e nada mais
    //Quando não informa o PATH o react-router-dom vai renderizar a rota caso outra rota não seja encontrada
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  )
}