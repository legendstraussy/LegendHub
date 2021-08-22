import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: 'unset',
      },
    },
    MuiList: {
      root: {
        cursor: 'default',
        marginTop: '2px',
        backgroundColor: 'rgba(0, 0, 0, .75)',
        fontFamily: 'inherit',
      },
    },
    MuiMenuItem: {
      root: {
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: '10pt',
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
