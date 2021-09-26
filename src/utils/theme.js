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
    contrastText: {
      red: '#fff',
      purple: '#fff',
      blue: '#fff',
      yellow: '#000',
      cyan: '#000',
      green: '#000',
    },
    link: '#219AFF',
  },
  overrides: {
    MuiTable: {
      root: {
        '& .MuiTableBody-root': {
          '& .MuiTableRow-root': {
            height: '35px !important',
            borderBottom: '1px solid rgba(45, 40, 40, .75)',
          },
          '& .MuiTableCell-body': {
            color: '#fff',
            whiteSpace: 'nowrap',
            borderRight: '1px solid rgba(64, 51, 51, .75)',
          },
        },
        '& .MuiTableCell-root': {
          fontFamily: 'inherit',
          padding: 0,
          border: 'unset',
        },
      },
    },
    MuiTablePagination: {
      root: {
        '& .MuiToolbar-root': {
          height: 35,
          background: 'rgba(0, 0, 0, .5)',
          textTransform: 'uppercase',
        },
        '& .MuiTablePagination-toolbar': {
          minHeight: 'unset',
          borderRadius: '0 0 5px 5px',
        },
        '& .MuiTablePagination-selectIcon': {
          color: '#219AFF',
        },
        '& .MuiTablePagination-actions': {
          '& .Mui-disabled': {
            color: '#444 !important',
          },
          '& .MuiButtonBase-root ': {
            color: '#219AFF',
          },
        },
      },
    },
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
          backgroundColor: 'rgba(35, 35, 35, .75)',
        },
        '&.Mui-selected:hover': {
          fontStyle: 'italic',
          color: '#219AFF',
          backgroundColor: 'rgba(35, 35, 35, .75)',
        },
        '&:hover': {
          color: '#fff',
          backgroundColor: 'rgba(35, 35, 35, .75)',
        },
      },
    },
  },
});

export default theme;
