import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

export const matches = (children, theme = defaultTheme) => expect(
  renderer.create(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  ).toJSON()
).toMatchSnapshot();

export const createInstance = (children, theme = defaultTheme) => renderer.create(
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
).root;

