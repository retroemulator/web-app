import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from '../pages/home';
import JoinSessionPage from '../pages/join-session';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        component={HomePage}
        exact
      />

      <Route
        path="/join-session"
        component={() => <JoinSessionPage defaultLoadDelay={500} />}
        exact
      />

      <Route
        path="*"
        component={() => <Redirect to="/" />}
      />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
