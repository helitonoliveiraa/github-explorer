import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/blobal';
import Routes from './routes/index';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
