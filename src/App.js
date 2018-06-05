import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import { Layout } from './components';
import Home from './views/home';

import { initStore } from './store/index'

const store = initStore();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Layout>
            <Home />
          </Layout>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
