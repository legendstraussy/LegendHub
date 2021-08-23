import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  '@global': {
    body: {
      backgroundColor: 'rgba(27, 13, 34, .5)',
    },
  },
  root: {
    border: 'unset',
    position: 'relative',
    outline: 'none !important',
    backgroundColor: 'rgba(27, 13, 34, .5)',
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-cell': {
      minHeight: '0 !important',
      outline: 'none',
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
      overflow: 'unset !important',
    },
    '& .MuiDataGrid-iconButtonContainer': {
      padding: 0,
    },
    '& .MuiDataGrid-columnHeader:focus-within': {
      outline: 'none',
    },
    '& .MuiDataGrid-sortIcon': {
      border: '1px solid yellow',
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
      '& span': {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: -10,
        top: -20,
        display: 'flex',
        minWidth: 'unset !important',
        width: 'unset !important',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#056891',
      },
    },
    '& .MuiDataGrid-columnHeaderWrapper > .MuiDataGrid-columnHeader:first-child span': {
      borderRadius: '5px 0 0 0',
    },
    '& .MuiDataGrid-columnHeaderWrapper > .MuiDataGrid-columnHeader:nth-child(4) span': {
      borderRadius: '0 5px 0 0',
    },
  },
});

const rows = [
  {
    id: 1, aa: 7, bb: 3, cc: 1, dd: 8, ee: 'test 1',
  },
  {
    id: 2, aa: 23, bb: 3, cc: 1, dd: 8, ee: 'test 2',
  },
  {
    id: 3, aa: 19, bb: 3, cc: 1, dd: 8, ee: 'test 3',
  },
  {
    id: 4, aa: 5, bb: 3, cc: 1, dd: 8, ee: 'test 4',
  },
];

export default function DataTable() {
  const classes = useStyles();
  const columns = [
    {
      field: 'aa',
      headerName: (
        <div className={classes.test}>
          <span>aa</span>
        </div>
      ),
      width: 25,
    },
    {
      field: 'bb',
      headerName: (
        <div className={classes.test}>
          <span>bb</span>
        </div>
      ),
      width: 25,
    },
    {
      field: 'cc',
      headerName: (
        <div className={classes.test}>
          <span>cc</span>
        </div>
      ),
      width: 25,
      showFilters: false,
    },
    {
      field: 'dd',
      headerName: (
        <div className={classes.test}>
          <span>dd</span>
        </div>
      ),
      width: 25,
    },
    {
      field: 'ee',
      headerName: 'normal',
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <br />
      <br />
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}
