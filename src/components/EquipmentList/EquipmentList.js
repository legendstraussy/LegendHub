import { DataGrid } from '@material-ui/data-grid';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';
import strIcon from '../../../public/winged-sword.png';
import minIcon from '../../../public/triorb.png';
import dexIcon from '../../../public/high-five.png';
import conIcon from '../../../public/heart-wings.png';
import perIcon from '../../../public/spyglass.png';
import spiIcon from '../../../public/vine-leaf.png';
import swordSlashIcon from '../../../public/sword-wound.png';
import mitIcon from '../../../public/shield-reflect.png';
import spellBookIcon from '../../../public/spell-book.png';
import rangeIcon from '../../../public/high-shot.png';
import hpRegenIcon from '../../../public/hpRegen.png';
import mvRegenIcon from '../../../public/mvRegen.png';
import maRegenIcon from '../../../public/maRegen.png';

const useStyles = makeStyles({
  icon: {
    position: 'unset !important',
    display: 'flex !important',
    width: '100% !important',
    height: 'unset !important',
    minWidth: 'unset !important',
    maxWidth: 'unset !important',
    minHeight: 'unset !important',
    maxHeight: 'unset !important',
  },
  root: {
    color: '#fff',
    border: 'unset',
    width: '100% !important',
    outline: 'none !important',
    fontFamily: 'open sans',
    top: '-6px',
    '& [data-field=str], & [data-field=min], & [data-field=dex], & [data-field=con], & [data-field=per], & [data-field=spi], & [data-field=damroll], & [data-field=hitroll], & [data-field=mitigation], & [data-field=spellCrit], & [data-field=spellDam], & [data-field=spellRedux], & [data-field=concentration], & [data-field=accuracy], & [data-field=hpRegen], & [data-field=mvRegen], & [data-field=maRegen]': {
      minWidth: '32px !important',
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
    '& [data-field=ac], & [data-field=align], & [data-field=rent]': {
      minWidth: '42px !important',
      maxWidth: 'unset !important',
      padding: '6px 0 !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default',
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        justifyContent: 'center',
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
      fontSize: '12px',
      borderBottom: '1px solid rgba(214, 214, 214, .25)',
      height: '36px',
      minHeight: 'unset !important',
      display: 'flex',
      alignItems: 'center',
      cursor: 'default',
      '& [data-field=slot]': {
        fontSize: '12px',
        fontWeight: '100',
        textTransform: 'capitalize',
        fontStyle: 'italic',
        fontFamily: 'Open Sans',
      },
      '& [data-field=item]': {
        fontFamily: 'Open Sans',
        fontWeight: '100',
        fontSize: '14px',
        color: '#219AFF',
      },
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
      height: '49px',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      minHeight: 'unset !important',
      lineHeight: 'unset !important',
      overflow: 'hidden !important',
      borderBottom: 'unset',
    },
    '& .MuiDataGrid-columnHeaderWrapper': {
      height: '26px',
      backgroundColor: 'rgba(0, 0, 0, .5)',
      overflow: 'unset !important',
      cursor: 'default',
      borderRadius: '5px 5px 0 0',
      display: 'flex',
      '& [data-field=slot], & [data-field=item], & [data-field=ac], & [data-field=align], & [data-field=rent]': {
        fontSize: '10px',
        textTransform: 'uppercase',
        cursor: 'default',
        padding: '6px 0',
      },
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
    '& .MuiDataGrid-footerContainer': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader': {
      fontFamily: 'inherit',
      fontSize: '10px',
      fontWeight: 600,
      textTransform: 'uppercase',
      '& span': {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: -13,
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
    // marginLeft: 4,
    // paddingLeft: 5,
    borderTopLeftRadius: '5px',
  },
  headerRightTab: {
    // marginRight: 4,
    // paddingRight: 5,
    borderTopRightRadius: '5px',
  },
  iconLabel: {
    height: '10px',
    position: 'absolute !important',
    top: '3px !important',
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
    id: 1005, slot: 'body', item: 'all-stats test plate mail', con: 100, str: 100, dex: 100, per: 100, min: 100, spi: 100, ac: -7, rent: 1200, damroll: 100, hitroll: 100, mitigation: 100, accuracy: 100, spellDam: 100, spellCrit: 100, spellRedux: 100, concentration: 100, hpRegen: 100, mvRegen: 100, maRegen: 100,
  },
];

const EquipmentList = () => {
  const classes = useStyles();
  const columns = [
    {
      field: 'slot',
      headerName: 'slot',
      sortable: false,
      width: 60,
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
      width: 30,
      minWidth: 30,
    },
    {
      field: 'min',
      headerName: (
        <div>
          <span>
            <Image src={minIcon} alt="" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'dex',
      headerName: (
        <div>
          <span>
            <Image src={dexIcon} alt="" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'con',
      headerName: (
        <div>
          <span>
            <Image src={conIcon} alt="" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'per',
      headerName: (
        <div>
          <span>
            <Image src={perIcon} alt="" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'spi',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={spiIcon} alt="" className={classes.icon} />
          </span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'ac',
      headerName: 'ac',
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'align',
      headerName: 'align',
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'rent',
      headerName: 'rent',
      sortable: false,
      width: 55,
      minWidth: 30,
    },
    {
      field: 'damroll',
      headerName: (
        <div>
          <span className={classes.headerLeftTab}>
            <Image src={swordSlashIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>dam</span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'hitroll',
      headerName: (
        <div>
          <span className={classes.headerMiddleTab}>
            <Image src={swordSlashIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>hit</span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'mitigation',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={mitIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>mit</span>
        </div>
      ),
      sortable: true,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'accuracy',
      headerName: (
        <div>
          <span className={`${classes.headerLeftTab} ${classes.headerRightTab}`}>
            <Image src={rangeIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>accr.</span>
        </div>
      ),
      sortable: true,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'spellDam',
      headerName: (
        <div>
          <span className={classes.headerLeftTab}>
            <Image src={spellBookIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>dam</span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'spellCrit',
      headerName: (
        <div>
          <span>
            <Image src={spellBookIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>crit</span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'spellRedux',
      headerName: (
        <div>
          <span>
            <Image src={spellBookIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>rdux</span>
        </div>
      ),
      sortable: false,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'concentration',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={spellBookIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>conc.</span>
        </div>
      ),
      sortable: true,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'hpRegen',
      headerName: (
        <div>
          <span className={classes.headerLeftTab}>
            <Image src={hpRegenIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>hpr</span>
        </div>
      ),
      sortable: true,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'mvRegen',
      headerName: (
        <div>
          <span>
            <Image src={mvRegenIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>mvr</span>
        </div>
      ),
      sortable: true,
      width: 30,
      minWidth: 30,
    },
    {
      field: 'maRegen',
      headerName: (
        <div>
          <span className={classes.headerRightTab}>
            <Image src={maRegenIcon} alt="" className={classes.icon} />
          </span>
          <span className={classes.iconLabel}>mar</span>
        </div>
      ),
      sortable: true,
      width: 30,
      minWidth: 30,
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
