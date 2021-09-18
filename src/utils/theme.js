import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    stats: {
      str: '#DE2E2E',
      min: '#A57BF1',
      dex: '#2e94fa',
      con: '#FFD874',
      per: '#31DBB9',
      spi: '#71DE71',
    },
    link: '#219AFF',
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: 'unset',
      },
    },
    MuiMenu: {
      paper: {
        background: '#000',
        maxHeight: 300,
      },
    },
    MuiList: {
      root: {
        cursor: 'default',
        marginTop: '2px',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        fontFamily: 'inherit',
      },
    },
    MuiMenuItem: {
      root: {
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: '16px',
        cursor: 'default',
        '&.Mui-selected': {
          fontStyle: 'italic',
          color: '#219AFF',
        },
        '&.Mui-focusVisible': {
          backgroundColor: 'rgba(86, 86, 86, .5)',
        },
        '&.Mui-selected:hover': {
          fontStyle: 'italic',
          color: '#219AFF',
          backgroundColor: 'rgba(86, 86, 86, .5)',
        },
        '&:hover': {
          color: '#fff',
          backgroundColor: 'rgba(86, 86, 86, .5)',
        },
      },
    },
  },
});

export default theme;
