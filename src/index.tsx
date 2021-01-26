import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider as SCProvider } from "styled-components";
import { createMuiTheme, responsiveFontSizes, ThemeProvider as MUIProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Main } from 'pages';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MUIProvider theme={theme}>
        <SCProvider theme={theme}>
          <CssBaseline />
          <Main />
        </SCProvider>
      </MUIProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
