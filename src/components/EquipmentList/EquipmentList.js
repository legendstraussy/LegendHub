import { DataGrid } from '@material-ui/data-grid';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';
import strIcon from '../../../public/str.png';
import minIcon from '../../../public/min.png';
import dexIcon from '../../../public/dex.png';
import conIcon from '../../../public/const.png';
import perIcon from '../../../public/per.png';
import spiIcon from '../../../public/spi.png';
import swordSlashIcon from '../../../public/sword-slash.png';
import mitIcon from '../../../public/mitigation.png';
import spellBookIcon from '../../../public/spell-book.png';

const useStyles = makeStyles({
  root: {
    color: '#fff',
    border: 'unset',
    position: 'relative',
    width: '100% !important',
    outline: 'none !important',
    top: '-6px',
    '& [data-field=str], & [data-field=min], & [data-field=dex], & [data-field=con], & [data-field=per], & [data-field=spi], & [data-field=damroll], & [data-field=hitroll], & [data-field=mitigation], & [data-field=spellCrit], & [data-field=spellDam], & [data-field=spellRedux], & [data-field=concentration]': {
      width: '42px !important',
      minWidth: '40px !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default',
      fontWeight: 600,
    },
    '& [data-field=str]': {
      color: '#DE2E2E',
    },
    '& [data-field=min]': {
      color: '#A57BF1',
    },
    '& [data-field=dex]': {
      color: '#2E94FA',
    },
    '& [data-field=con]': {
      color: '#FFD874',
    },
    '& [data-field=per]': {
      color: '#31DBB9',
    },
    '& [data-field=spi]': {
      color: '#71DE71',
    },
    '& [data-field=ac]': {
      width: '45px !important',
      minWidth: '45px !important',
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
      minWidth: '33px !important',
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
      minWidth: '55px !important',
      maxWidth: 'unset !important',
      padding: 'unset !important',
      margin: '0 2px !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default',
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        justifyContent: 'center',
      },
    },
    '& .MuiDataGrid-dataContainer': {
    },
    '& .MuiDataGrid-renderingZone': {
      width: 'unset !important',
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
    '& .MuiDataGrid-main': {
      position: 'unset !important',
    },
    '& .MuiTablePagination-root': {
      display: 'none',
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-row': {
      fontSize: '10pt',
      borderBottom: '1px solid rgba(214, 214, 214, .25)',
      height: '40px',
      width: '100%',
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
      top: '38px !important',
    },
    '& .MuiDataGrid-columnsContainer': {
      height: '44px',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      minHeight: 'unset !important',
      lineHeight: 'unset !important',
      overflow: 'hidden !important',
      borderBottom: 'unset',
    },
    '& .MuiDataGrid-columnHeaderWrapper': {
      height: '32px',
      backgroundColor: 'rgba(0, 0, 0, .5)',
      overflow: 'unset !important',
      cursor: 'default',
      borderRadius: '5px 5px 0 0',
      display: 'flex',
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
    '& .MuiDataGrid-footerContainer': {
      display: 'none',
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
    marginLeft: -5,
    paddingLeft: 5,
    borderRadius: '5px 0 0 0',
  },
  headerRightTab: {
    marginRight: -5,
    paddingRight: 5,
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
  iconLabel: {
    height: '10px',
    backgroundColor: 'rgba(0, 0, 0, .0) !important',
    position: 'absolute !important',
    top: '0px !important',
    left: '0px !important',
    fontSize: '8px',
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_EquipmentList' });

const rows = [
  {
    id: 1001, slot: 'finger', item: 'a polished hessonite garnet ring', min: -15, align: 'GN',
  },
  {
    id: 1002, slot: 'finger', item: 'a cool con ring', con: 5, ac: -7, rent: 1200, str: 10,
  },
  {
    id: 1003, slot: 'neck', item: 'a cool con ring', con: 5, ac: -7, rent: 1200, damroll: 2, hitroll: 1,
  },
  {
    id: 1004, slot: 'neck', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1005, slot: 'body', item: 'a cool con ring', con: 5, ac: -7, rent: 1200, spellCrit: 23,
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
      sortable: true,
      width: 260,
    },
    {
      field: 'str',
      headerName: (
        <div>
          <span className={classes.headerLeftTab}>
            <Image src={strIcon} alt="" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
      width: 50,
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
      width: 38,
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
      width: 38,
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
      width: 38,
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
      width: 38,
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
      width: 38,
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
    {
      field: 'damroll',
      headerName: (
        <div>
          <span className={classes.headerLeftTab}>
            <Image src={swordSlashIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>dam</span>
        </div>
      ),
      sortable: false,
      width: 38,
    },
    {
      field: 'hitroll',
      headerName: (
        <div>
          <span>
            <Image src={swordSlashIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>hit</span>
        </div>
      ),
      sortable: false,
      width: 38,
    },
    {
      field: 'mitigation',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={mitIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>mit</span>
        </div>
      ),
      sortable: true,
      width: 38,
    },
    {
      field: 'spellDam',
      headerName: (
        <div>
          <span className={classes.headerLeftTab}>
            <Image src={spellBookIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>dam</span>
        </div>
      ),
      sortable: false,
      width: 38,
    },
    {
      field: 'spellCrit',
      headerName: (
        <div>
          <span>
            <Image src={spellBookIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>crit</span>
        </div>
      ),
      sortable: false,
      width: 38,
    },
    {
      field: 'spellRedux',
      headerName: (
        <div>
          <span>
            <Image src={spellBookIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>redux</span>
        </div>
      ),
      sortable: false,
      width: 38,
    },
    {
      field: 'concentration',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={spellBookIcon} alt="" width="25" height="25" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>conc.</span>
        </div>
      ),
      sortable: true,
      width: 38,
    },
  ];

  return (
    <DataGrid
      className={classes.root}
      rows={rows}
      columns={columns}
      autoHeight
    />
  );
};

export default EquipmentList;
