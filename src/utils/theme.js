import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    main: {
      red: '#DE2E2E',
      purple: '#A57BF1',
      blue: '#2e94fa',
      yellow: '#FFD874',
      cyan: '#31DBB9',
      green: '#71DE71',
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
