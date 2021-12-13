import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { persistStore } from 'redux-persist';

import { PrivateRoute } from 'src/components';
import { store } from 'src/store';
import LoginPage from './pages/LoginPage';
import ConsolePage from './pages/ConsolePage';

const persistor = persistStore(store);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <PrivateRoute exact path="/console" component={ConsolePage} />
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
