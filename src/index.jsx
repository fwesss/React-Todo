import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'mineral-ui/themes';

import App from './App';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>, document.getElementById('root'),
);
