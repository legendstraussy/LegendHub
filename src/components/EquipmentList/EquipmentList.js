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
      cursor: 'default',
    },
    '& [data-field=ac]': {
      width: '45px !important',
      minWidth: 'unset !important',
      maxWidth: 'unset !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default',
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        padding: 'unset !important',
        justifyContent: 'center',
      },
    },
    '& [data-field=align]': {
      width: '33px !important',
      minWidth: 'unset !important',
      maxWidth: 'unset !important',
      padding: 'unset !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default',
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        justifyContent: 'center',
      },
    },
    '& [data-field=rent]': {
      width: '55px !important',
      minWidth: 'unset !important',
      maxWidth: 'unset !important',
      padding: 'unset !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default',
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        justifyContent: 'center',
      },
    },
    '& .MuiDataGrid-renderingZone': {
      '& [data-field=slot]': {
        fontSize: '10pt',
        fontWeight: '100',
        textTransform: 'capitalize',
        fontStyle: 'italic',
        fontFamily: 'Open Sans',
      },
      '& [data-field=item]': {
        color: '#219AFF',
      },
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-row': {
      fontSize: '10pt',
      borderBottom: '1px solid rgba(214, 214, 214, .25)',
      height: '40px',
      minHeight: 'unset !important',
      display: 'flex',
      alignItems: 'center',
      cursor: 'default',
    },
    '& .MuiDataGrid-cell': {
      borderBottom: 'unset',
      outline: 'none',
    },
    '& .MuiDataGrid-window': {
      backgroundColor: 'rgba(0, 0, 0, .7)',
      top: '31px !important',
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
      height: '31px',
      backgroundColor: 'rgba(0, 0, 0, .5)',
      overflow: 'unset !important',
      borderRadius: '5px 5px 0 0',
      cursor: 'default',
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
        bottom: -16,
        top: -22,
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
    width: '28px !important',
    height: 'unset !important',
    minWidth: 'unset !important',
    maxWidth: 'unset !important',
    minHeight: 'unset !important',
    maxHeight: 'unset !important',
  },
}, { name: 'Mui_Styles_EquipmentList' });

const rows = [
  {
    id: 1001, slot: 'finger ₁', item: 'a polished hessonite garnet ring', min: 5, align: 'GN',
  },
  {
    id: 1002, slot: 'finger ₂', item: 'a cool con ring', con: 5, ac: -7, rent: 1200,
  },
  {
    id: 1003, slot: 'neck ₁', item: 'a cool con ring', con: 5, ac: -7, rent: 1200,
  },
  {
    id: 1004, slot: 'neck ₂', item: 'a cool con ring', con: 5, ac: -7, rent: 1200,
  },
  {
    id: 1005, slot: 'body', item: 'a cool con ring', con: 5, ac: -7, rent: 1200,
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
          <span>
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
          <span>
            <Image src={conIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
    },
    {
      field: 'per',
      headerName: (
        <div>
          <span>
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
    {
      field: 'ac',
      headerName: 'ac',
      sortable: false,
    },
    {
      field: 'align',
      headerName: 'align',
      sortable: false,
    },
    {
      field: 'rent',
      headerName: 'rent',
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
