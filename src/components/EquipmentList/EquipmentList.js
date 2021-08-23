import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: '#fff',
    border: 'unset',
    position: 'relative',
    outline: 'none !important',
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-cell': {
      outline: 'none',
    },
    '& .MuiDataGrid-window': {
      backgroundColor: 'rgba(0, 0, 0, .7)',
      top: '30px !important',
    },
    '& .MuiDataGrid-columnsContainer': {
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      minHeight: 'unset !important',
      lineHeight: 'unset !important',
      overflow: 'unset !important',
    },
    '& .MuiDataGrid-columnHeaderWrapper': {
      height: '30px',
      backgroundColor: 'rgba(0, 0, 0, .5)',
      overflow: 'unset !important',
      borderRadius: '5px 5px 0 0',
    },
    '& .MuiDataGrid-iconButtonContainer': {
      padding: 0,
    },
    '& .MuiDataGrid-columnHeader:focus-within': {
      outline: 'none',
    },
    '& .MuiDataGrid-sortIcon': {
      display: 'none',
    },
    '& .MuiDataGrid-menuIcon, .MuiDataGrid-iconButtonContainer': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
      padding: 0,
    },
    '& .MuiDataGrid-columnHeader': {
      width: '40px',
      color: '#fff',
      fontFamily: 'inherit',
      fontSize: '8pt',
      fontWeight: 600,
      textTransform: 'uppercase',
      '& span': {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: -15,
        top: -20,
        display: 'flex',
        minWidth: 'unset !important',
        width: 'unset !important',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#222',
      },
    },
  },
  headerLeftTab: {
    borderRadius: '5px 0 0 0',
  },
  headerRightTab: {
    borderRadius: '0 5px 0 0',
  },
}, { name: 'Mui_Styles_EquipmentList' });

const rows = [
  {
    id: 1001, slot: 'finger 1', item: 'a polished hessonite garnet ring', con: 5,
  },
  {
    id: 2, aa: 23, bb: 3, cc: 1, dd: 8, ee: 'test 2', ff: 2, gg: 23, hh: 12,
  },
  {
    id: 3, aa: 19, bb: 3, cc: 1, dd: 8, ee: 'test 3', ff: 2, gg: 5, hh: 12,
  },
  {
    id: 4, aa: 5, bb: 3, cc: 1, dd: 8, ee: 'test 4', ff: 2, gg: 14, hh: 12,
  },
];

const EquipmentList = () => {
  const classes = useStyles();
  const columns = [
    {
      field: 'slot',
      headerName: 'slot',
      sortable: false,
    },
    {
      field: 'item',
      headerName: 'item',
      sortable: false,
    },
    {
      field: 'str',
      headerName: (
        <div>
          <span className={classes.headerLeftTab}>str</span>
        </div>
      ),
      width: 25,
      sortable: false,
    },
    {
      field: 'min',
      headerName: (
        <div>
          <span>min</span>
        </div>
      ),
      width: 25,
      sortable: false,
    },
    {
      field: 'dex',
      headerName: (
        <div>
          <span>dex</span>
        </div>
      ),
      width: 25,
      showFilters: false,
      sortable: false,
    },
    {
      field: 'con',
      headerName: (
        <div>
          <span>con</span>
        </div>
      ),
      width: 25,
      showFilters: false,
    },
    {
      field: 'per',
      headerName: (
        <div>
          <span>per</span>
        </div>
      ),
      width: 25,
      showFilters: false,
    },
    {
      field: 'spi',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>spi</span>
        </div>
      ),
      width: 25,
    },
    {
      field: 'ee',
      headerName: 'normal',
    },
    {
      field: 'ff',
      headerName: (
        <div>
          <span className={classes.headerLeftTab}>ff</span>
        </div>
      ),
      width: 25,
    },
    {
      field: 'gg',
      headerName: (
        <div>
          <span>gg</span>
        </div>
      ),
      width: 25,
    },
    {
      field: 'hh',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>hh</span>
        </div>
      ),
      width: 25,
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default EquipmentList;
