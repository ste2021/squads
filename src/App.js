import React from 'react';
import { Helmet } from 'react-helmet';
import Main from './pages/Main';
import LogoTopoPagina from './assets/img/LogoTopoPagina.png';
import './styles.css';

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Pecege Squads</title>
        <meta name="description" content="Website Pecege Squads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={LogoTopoPagina} />
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
