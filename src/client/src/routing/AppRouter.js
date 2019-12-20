import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from '../pages/home';
import CreateSessionPage from '../pages/create-session';
import JoinSessionPage from '../pages/join-session';
import StreamPage from '../pages/stream';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        component={() => <HomePage />}
        exact
      />

      <Route
        path="/create-session"
        component={() => <CreateSessionPage defaultLoadDelay={500} />}
      />

      <Route
        path="/join-session"
        component={() => <JoinSessionPage defaultLoadDelay={500} />}
        exact
      />

      <Route
        path="/stream"
        component={() => <StreamPage />}
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
