import React, { useState, useMemo, useEffect, useLayoutEffect, useRef } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'dark');

  const firstRender = useRef(true);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme(prevState => prevState == 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    console.debug('todo render');
  });

  useEffect(() => {
    console.debug('primeiro render');
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.debug({ theme })
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme])

  // useLayoutEffect(() => {
  //   //Trava a renderização até finalizar de executar
  //   for (let i = 0; i <= 15000; i++) {
  //     console.debug(i);
  //   }
  //   console.debug('useLayoutEffect')
  // }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <button onClick={handleToggleTheme}>Toggle</button>
      {theme === 'dark' && (
        <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
      )}
    </ThemeProvider>
  );
};

export default App;
