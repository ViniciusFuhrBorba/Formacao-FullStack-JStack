import React, { Component } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends Component {
  state = {
    changed: false
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state, nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state, prevProps, prevState);
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', error, info);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('rendered');
    return (
      <ThemeProvider>

        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <button onClick={handleToggleTheme}>Change State</button>
              <GlobalStyle />
              {theme == 'dark' && <Layout />}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
  }
}

export default App;
