import { useRef } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';

const useIconStyles = makeStyles((theme) => ({
  root: {
    width: 40,
    position: 'absolute',
    top: -15,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#222',
    borderTopLeftRadius: props => props.leftEnd ? '5px' : 'unset',
    borderTopRightRadius: props => props.rightEnd ? '5px' : 'unset',
    '& div:first-child': {
      position: 'relative',
      width: 32,
      height: 32,
      overflow: 'unset !important',
    },
  },
  icon: {
    position: 'absolute',
    top: '15px !important',
    left: 0,
    bottom: 0,
    right: 0,
    padding: 0,
    width: '32px !important',
    height: '32px !important',
    minWidth: 'unset !important',
    minHeight: 'unset !important',
    maxWidth: 'unset !important',
    maxHeight: 'unset !important',
  },
  label: {
    color: props => theme.palette.stats[props.label] || '#fff',
    position: 'relative',
    top: 4,
    fontSize: '10px',
    textTransform: 'uppercase',
  },
}), { name: 'Mui_Styles_IconHead' });

const IconHead = props => {
  const { icon, label } = props;
  const classes = useIconStyles(props);

  return (
    <div className={classes.root}>
      <Image src={icon} alt="" width={32} height={32} layout="fixed" className={classes.icon} />
      <div className={classes.label}>
        {label}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    background: 'rgba(0, 0, 0, .5)',
    borderRadius: '5px 5px 0 0',
  },
  container: {
    background: 'rgba(0, 0, 0, .75)',
    overflow: 'auto !important',
  },
  table: {
    width: 'max-content;',
    fontFamily: 'open sans',
  },
  thead: {
    position: 'sticky',
    top: 0,
    fontFamily: 'Open Sans',
    fontSize: '10px',
    whiteSpace: 'nowrap',
    // header columns
    '& [data-value=slot], & [data-value=name], & [data-value=str], & [data-value=min], & [data-value=dex], & [data-value=con], & [data-value=per], & [data-value=spi], & [data-value=ac], & [data-value=align], & [data-value=rent], & [data-value=damroll], & [data-value=hitroll], & [data-value=mitigation], & [data-value=test]': {
      color: '#fff',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      padding: '0 10px',
      fontSize: 10,
      textTransform: 'uppercase',
      userSelect: 'none',
    },
  },
  tbody: {
    '& .MuiTableRow-root': {
      height: '36px !important',
      borderBottom: '1px solid rgba(45, 40, 40, .75)',
    },
    '& .MuiTableCell-body': {
      color: '#fff',
      padding: '10px 0',
      whiteSpace: 'nowrap',
      borderRight: '1px solid rgba(64, 51, 51, .75)',
    },
    // body columns
    '& [data-value=slot],& [data-value=test]': {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-start',
      padding: '0 10px',
      fontSize: 14,
      fontWeight: 100,
      fontStyle: 'italic',
      textTransform: 'capitalize',
    },
    '& [data-value=name]': {
      width: 'inherit',
      padding: '0 10px',
      color: theme.palette.link,
      fontWeight: 100,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '& [data-value=ac], & [data-value=align], & [data-value=rent]': {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      fontSize: 14,
      fontWeight: 100,
      textTransform: 'capitalize',
    },
    '& [data-value=str], & [data-value=min], & [data-value=dex], & [data-value=con], & [data-value=per], & [data-value=spi], & [data-value=damroll], & [data-value=hitroll], & [data-value=mitigation], & [data-value=accuracy], & [data-value=spellDam], & [data-value=spellCrit], & [data-value=spellRedux], & [data-value=concentration], & [data-value=hpRegen], & [data-value=mvRegen], & [data-value=maRegen]': {
      fontWeight: 100,
      display: 'flex',
      flexDirect: 'column',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  cell: {
    fontFamily: 'inherit',
    padding: 0,
    border: 'unset',
  },
}), { name: 'Mui_Styles_EquipmentList' });

const items = [
  {
    id: 1001, slot: 'finger', name: 'a polished hessonite garnet ring', str: 10, min: 20, rent: 1895, con: 5, ac: -7, mv: -40, spellCrit: 2, spellDam: 2, align: 'GNE',
  },
  {
    id: 1002, slot: 'arm', name: 'crazy stat item', str: 100, con: 100, spi: 100, per: 100, rent: 55555, min: 100, dex: 100, ac: -17, mvRegen: 10, align: 'G', damroll: 55, hitroll: 1, mitigation: 0, accuracy: 100, spellDam: 100, spellCrit: 100, spellRedux: 100, concentration: 100, hpRegen: 100, mvRegen: 100, maRegen: 100,
  },
  {
    id: 1003, slot: 'amulet', name: 'white shield of the Holy from a far away place', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1004, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1005, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1006, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1007, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1008, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1009, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1010, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1011, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1012, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1013, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1014, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1015, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1016, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1017, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1018, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1019, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1020, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1021, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1022, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1023, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1024, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1025, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1026, test: 123, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
];

const headers = [
  {
    id: 'slot', label: 'slot', width: 65, align: 'flex-start',
  },
  {
    id: 'name', label: 'item', width: 250, align: 'flex-start',
  },
  {
    id: 'str', label: 'str', component: <IconHead leftEnd icon="/winged-sword.png" label="str" />, width: 40,
  },
  {
    id: 'min', label: 'min', component: <IconHead icon="/spell-book.png" label="min" />, width: 40,
  },
  {
    id: 'dex', label: 'dex', component: <IconHead icon="/high-five.png" label="dex" />, width: 40,
  },
  {
    id: 'con', label: 'con', component: <IconHead icon="/heart-wings.png" label="con" />, width: 40,
  },
  {
    id: 'per', label: 'per', component: <IconHead icon="/spyglass.png" label="per" />, width: 40,
  },
  {
    id: 'spi', label: 'spi', component: <IconHead rightEnd icon="/vine-leaf.png" label="spi" />, width: 40,
  },
  { id: 'ac', label: 'ac', width: 35 },
  { id: 'align', label: 'align', width: 55 },
  { id: 'rent', label: 'rent', width: 50 },
  {
    id: 'damroll', label: 'damroll', component: <IconHead leftEnd icon="/sword-wound.png" label="dam" />, width: 40,
  },
  {
    id: 'hitroll', label: 'hitroll', component: <IconHead icon="/sword-wound.png" label="hit" />, width: 40,
  },
  {
    id: 'mitigation', label: 'mitigation', component: <IconHead rightEnd icon="/shield-reflect.png" label="mit" />, width: 40,
  },
  {
    id: 'accuracy', label: 'accuracy', component: <IconHead leftEnd rightEnd icon="/high-shot.png" label="acc" />, width: 40,
  },
  {
    id: 'spellDam', label: 'spellDam', component: <IconHead leftEnd icon="/spell-book.png" label="dam" />, width: 40,
  },
  {
    id: 'spellCrit', label: 'spellCrit', component: <IconHead icon="/spell-book.png" label="crit" />, width: 40,
  },
  {
    id: 'spellRedux', label: 'spellRedux', component: <IconHead icon="/spell-book.png" label="rdux" />, width: 40,
  },
  {
    id: 'concentration', label: 'concentration', component: <IconHead rightEnd icon="/spell-book.png" label="conc" />, width: 40,
  },
  {
    id: 'hpRegen', label: 'hpRegen', component: <IconHead leftEnd icon="/hpRegen.png" label="hpr" />, width: 40,
  },
  {
    id: 'mvRegen', label: 'mvRegen', component: <IconHead icon="/mvRegen.png" label="mvr" />, width: 40,
  },
  {
    id: 'maRegen', label: 'maRegen', component: <IconHead rightEnd icon="/maRegen.png" label="mar" />, width: 40,
  },
  {
    id: 'test', label: 'test', width: 120, align: 'flex-start',
  },
];

const EquipmentList = () => {
  const classes = useStyles(items);
  const tableEl = useRef(null);

  const handleScroll = event => {
    const pos = event.target.scrollLeft;
    tableEl.current.style.left = `${-pos}px`;
  };

  return (
    <>
      <div className={classes.root}>
        <div ref={tableEl} style={{ position: 'relative' }}>
          <Table style={{ width: 'max-content' }}>
            <TableHead
              className={classes.thead}
            >
              <TableRow>
                {headers.map(header => (
                  <TableCell key={header.id} style={{ width: header?.width }} className={classes.cell}>
                    {header.component || <div style={{ justifyContent: header.align || 'center' }} data-value={header.id}>{header.label}</div>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>
        </div>
      </div>
      <TableContainer className={classes.container} onScroll={handleScroll}>
        <Table className={classes.table}>
          <TableBody className={classes.tbody}>
            {items.map(item => (
              <TableRow key={item.id}>
                {headers.map(header => (
                  <TableCell key={header.id} style={{ width: header?.width }} className={classes.cell}>
                    <div data-value={header.id}>{item[header.id]}</div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EquipmentList;
