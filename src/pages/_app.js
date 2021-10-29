import { useState } from 'react';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import theme from '../utils/theme';
import './styles/globals.css';

const queryCache = new QueryCache();

const App = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <QueryClientProvider client={queryClient} queryCache={queryCache}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </QueryClientProvider>
      </StylesProvider>
    </ThemeProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape([
    PropTypes.node,
  ]).isRequired,
};

export default App;
