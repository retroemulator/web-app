import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// TODO: update this
import HomePage from '../pages/home';

// TODO: remove this
import HomePageOld from '../pages/home-old';
import EmulatorPage from '../pages/emulator';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />

      <Route
        path="/home"
        component={HomePageOld}
        exact
      />

      <Route
        path="/stream"
        component={EmulatorPage}
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
