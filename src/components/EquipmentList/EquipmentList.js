import { DataGrid } from '@material-ui/data-grid';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';
import strIcon from '../../../public/str.png';
import minIcon from '../../../public/min.png';
import dexIcon from '../../../public/dex.png';
import conIcon from '../../../public/const.png';
import perIcon from '../../../public/per.png';
import spiIcon from '../../../public/spi.png';

const useStyles = makeStyles({
  root: {
    color: '#fff',
    border: 'unset',
    position: 'relative',
    outline: 'none !important',
    '& [data-field=str], & [data-field=min], & [data-field=dex], & [data-field=con], & [data-field=per], & [data-field=spi]': {
      width: '32px !important',
      minWidth: 'unset !important',
      maxWidth: 'unset !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-row, & .MuiDataGrid-renderingZone': {
      width: 'unset !important',
    },
    '& .MuiDataGrid-row': {
      borderBottom: '1px solid rgba(214, 214, 214, .25)',
      height: '40px',
      minHeight: 'unset !important',
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiDataGrid-cell': {
      borderBottom: 'unset',
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
      borderBottom: 'unset',
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
        alignItems: 'center',
        justifyContent: 'center',
        background: '#222',
        '& img:first-child': {
          display: 'none !important',
        },
      },
    },
  },
  headerLeftTab: {
    marginLeft: -10,
    paddingLeft: 10,
    borderRadius: '5px 0 0 0',
  },
  headerRightTab: {
    marginRight: -10,
    paddingRight: 10,
    borderRadius: '0 5px 0 0',
  },
  icon: {
    position: 'unset !important',
    display: 'flex !important',
    width: '32px !important',
    height: 'unset !important',
    minWidth: 'unset !important',
    maxWidth: 'unset !important',
    minHeight: 'unset !important',
    maxHeight: 'unset !important',
  },
}, { name: 'Mui_Styles_EquipmentList' });

const rows = [
  {
    id: 1001, slot: 'finger 1', item: 'a polished hessonite garnet ring', min: 5,
  },
  {
    id: 1002, slot: 'finger 1', item: 'a cool con ring', con: 5,
  },
];

const EquipmentList = () => {
  const classes = useStyles();
  const columns = [
    {
      field: 'slot',
      headerName: 'slot',
      sortable: false,
      width: 75,
    },
    {
      field: 'item',
      headerName: 'item',
      sortable: false,
      width: 260,
    },
    {
      field: 'str',
      headerName: (
        <div>
          <span className={classes.headerLeftTab}>
            <Image src={strIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
    },
    {
      field: 'min',
      headerName: (
        <div>
          <span>
            <Image src={minIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
    },
    {
      field: 'dex',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={dexIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
    },
    {
      field: 'con',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={conIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: true,
    },
    {
      field: 'per',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={perIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
    },
    {
      field: 'spi',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={spiIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
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
