import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import { Layout } from './components';
import Home from './views/home';
import Stats from './views/stats'

import { initStore } from './store/index'

const store = initStore();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/stats" component={Stats} />
              </Switch>
            </Layout>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
