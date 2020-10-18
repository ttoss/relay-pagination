import * as React from 'react';

import theme from '@ttoss/ttheme';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';

import 'typeface-asap';
import 'typeface-overpass';
import 'typeface-overpass-mono';

import App from './App';

const root = document.getElementById('root') as HTMLElement;

const node = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.unstable_createRoot(root).render(node);
