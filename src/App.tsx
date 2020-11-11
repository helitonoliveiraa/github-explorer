import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from './context/theme';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <AppThemeProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </AppThemeProvider>
  </>
);

export default App;
