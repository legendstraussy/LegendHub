import { RecoilRoot } from 'recoil';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import theme from '../utils/theme';
import './styles/globals.css';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <StylesProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </StylesProvider>
  </ThemeProvider>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape([
    PropTypes.node,
  ]).isRequired,
};

export default App;
