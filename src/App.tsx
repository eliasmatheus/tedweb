import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import './styles/theming/bootstrap-theming.scss';

const App: React.FC = () => (
  <>
    <Router>
      <Routes />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
