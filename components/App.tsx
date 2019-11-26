// @flow
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as React from 'react';
import color from 'color';

import { App as ThemedApp } from './Theme';
import themeList from '../libraries/theme';

let offlineInstalled = false;

interface Props {
  theme?: string;
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const App: React.FC<Props> = ({ children, theme }) => {
  const themeName = !themeList[theme || ''] ? 'main' : theme;
  if (!themeList[themeName].helper) themeList[themeName].helper = color;

  if (process.env.OFFLINE_SUPPORT && process.browser && !offlineInstalled) {
    const OfflinePlugin = require('offline-plugin/runtime'); // eslint-disable-line global-require

    OfflinePlugin.install({
      onUpdateReady() {
        OfflinePlugin.applyUpdate();
      },
      onUpdated() {
        window.location.reload();
      },
    });
    offlineInstalled = true;
  }

  return (
    <ThemeProvider theme={themeList[themeName]}>
      <ThemedApp>
        <GlobalStyle />
        {children}
      </ThemedApp>
    </ThemeProvider>
  );
};

App.defaultProps = {
  theme: 'main',
};

export default App;
