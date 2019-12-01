import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import HomePage from '../pages/home';
import EmulatorPage from '../pages/emulator';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route
          path="/"
          component={HomePage}
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
    </div>
  </BrowserRouter>
);

export default AppRouter;
