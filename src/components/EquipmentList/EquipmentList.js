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
    paddingBottom: '2px !important',
    display: 'flex !important',
    width: '100% !important',
    height: '100% !important',
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
    '& [data-field=str], & [data-field=min], & [data-field=dex], & [data-field=con], & [data-field=per], & [data-field=spi], & [data-field=damroll], & [data-field=hitroll], & [data-field=mitigation], & [data-field=spellCrit], & [data-field=spellDam], & [data-field=spellRedux], & [data-field=concentration], & [data-field=accuracy], & [data-field=hpRegen], & [data-field=mvRegen], & [data-field=maRegen]': {
      minWidth: '32px !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default',
      fontWeight: 400,
      position: 'relative',
      right: -6,
      left: 6,
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
      position: 'relative',
      left: 4,
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
      borderBottom: '1px solid rgba(45, 40, 40, .75)',
      display: 'flex !important',
      flex: '1 !important',
      alignItems: 'center',
      cursor: 'default',
      '& [data-field=slot]': {
        fontSize: '14px',
        fontWeight: '100',
        textTransform: 'capitalize',
        fontStyle: 'italic',
        fontFamily: 'Open Sans',
        position: 'relative',
        left: 4,
      },
      '& [data-field=item]': {
        fontFamily: 'Open Sans',
        fontWeight: '100',
        fontSize: '14px',
        color: '#219AFF',
        position: 'relative',
        left: 4,
      },
      '& [data-field=str], & [data-field=damroll]': {
        borderLeft: '1px solid rgba(64, 51, 51, .75)',
      },
      '& [data-field=str], & [data-field=min], & [data-field=dex], & [data-field=con], & [data-field=per], & [data-field=spi], & [data-field=ac], & [data-field=align], & [data-field=damroll], & [data-field=hitroll], & [data-field=mitigation], & [data-field=accuracy], & [data-field=spellDam], & [data-field=spellCrit], & [data-field=spellRedux], & [data-field=concentration], & [data-field=hpRegen], & [data-field=mvRegen], & [data-field=maRegen]': {
        borderRight: '1px solid rgba(64, 51, 51, .75)',
      },
    },
    '& .MuiDataGrid-cell': {
      borderBottom: 'unset',
      outline: 'none !important',
    },
    '& .MuiDataGrid-window': {
      overflowX: 'hidden !important',
      backgroundColor: 'rgba(0, 0, 0, .7)',
      top: '38px !important',
    },
    '& .MuiDataGrid-dataContainer': {
      transform: 'unset !important',
    },
    '& .MuiDataGrid-columnsContainer': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: -3,
      borderBottom: 'unset',
    },
    '& .MuiDataGrid-columnHeaderWrapper': {
      height: '26px',
      backgroundColor: 'rgba(0, 0, 0, .5)',
      position: 'relative',
      overflow: 'unset !important',
      cursor: 'default',
      borderRadius: '5px 5px 0 0',
      '& [data-field=slot], & [data-field=item], & [data-field=ac], & [data-field=align]': {
        fontSize: '10px',
        textTransform: 'uppercase',
        cursor: 'default',
        padding: '6px 4px',
        height: '26px',
        left: 4,
      },
    },
    '& [data-field=rent]': {
      left: 4,
      height: '26px',
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
        bottom: -7,
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
    borderTopLeftRadius: '5px',
  },
  headerRightTab: {
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
    id: 1005, slot: 'body', item: 'all-stats test plate mail', con: 100, str: 100, dex: 100, per: 100, min: 100, spi: 100, ac: -22, rent: 1200, damroll: 100, hitroll: 100, mitigation: 100, accuracy: 100, spellDam: 100, spellCrit: 100, spellRedux: 100, concentration: 100, hpRegen: 100, mvRegen: 100, maRegen: 100, align: 'GNE',
  },
  {
    id: 1006, slot: 'head', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1007, slot: 'face', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1008, slot: 'legs', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1009, slot: 'feet', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1010, slot: 'hands', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1011, slot: 'arms', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1012, slot: 'about', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1013, slot: 'waist', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1014, slot: 'wrist', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1015, slot: 'wrist', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1016, slot: 'wield', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1017, slot: 'hold', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1018, slot: 'hold', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1019, slot: 'hold', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1020, slot: 'ear', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1021, slot: 'ear', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
  },
  {
    id: 1022, slot: 'arm', item: 'a cool con ring', con: 5, ac: -7, rent: 12000, mitigation: 3,
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
          <span className={classes.iconLabel}>str</span>
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
          <span className={classes.iconLabel}>min</span>
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
          <span className={classes.iconLabel}>dex</span>
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
          <span className={classes.iconLabel}>con</span>
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
          <span className={classes.iconLabel}>per</span>
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
          <span className={classes.iconLabel}>spi</span>
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
      sortable: true,
      width: 30,
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
    <div style={{ height: '100%' }}>
      <div style={{ display: 'flex', height: '100%', minWidth: '1016px' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            className={classes.root}
            rows={rows}
            columns={columns}
            hideFooter
            hideFooterPagination
            hideFooterRowCount
            hideFooterSelectedRowCount
            disableColumnSelector
            disableSelectionOnClick
            rowHeight={36}
          />
        </div>
      </div>
    </div>
  );
};

export default EquipmentList;
