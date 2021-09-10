import { useEffect, useState, useRef } from 'react';
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
import strIcon from '/public/winged-sword.png';
import minIcon from '/public/triorb.png';
import dexIcon from '/public/high-five.png';
import conIcon from '/public/heart-wings.png';
import perIcon from '/public/spyglass.png';
import spiIcon from '/public/vine-leaf.png';
import swordSlashIcon from '/public/sword-wound.png';
import mitIcon from '/public/shield-reflect.png';
import spellBookIcon from '/public/spell-book.png';
import rangeIcon from '/public/high-shot.png';
import hpRegenIcon from '/public/hpRegen.png';
import mvRegenIcon from '/public/mvRegen.png';
import maRegenIcon from '/public/maRegen.png';

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    background: 'rgba(0, 0, 0, .5)',
    borderRadius: '5px 5px 0 0',
  },
  table: {
    // height: rows => rows?.length < 15 ? 'inherit' : 'unset',
    // background: 'rgba(0, 0, 0, .5)',
  },
  thead: {
    position: 'sticky',
    top: 0,
    // background: 'rgba(0, 0, 0, .5)',
    fontFamily: 'Open Sans',
    '& .MuiTableCell-head': {
      color: '#fff',
      padding: '.25em 1em',
      whiteSpace: 'nowrap',
      fontSize: '10px',
      textTransform: 'uppercase',
    },
    '& cell': {
      border: '1px solid red',
    },
  },
  tbody: {
    background: 'rgba(0, 0, 0, .5)',
    '& .MuiTableRow-root': {
      height: '36px !important',
    },
    '& .MuiTableCell-body': {
      color: '#fff',
      padding: '0 10px',
      whiteSpace: 'nowrap',
    },
  },
  cell: {
    fontFamily: 'open sans',
  },
}, { name: 'Mui_Styles_EquipmentList' });

const items = [
  {
    id: 1001, slot: 'finger', name: 'a polished hessonite garnet ring', rent: 1895, con: 5, ac: -7, mv: -40, spellCrit: 2, spellDam: 2,
  },
  {
    id: 1002, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
  },
  {
    id: 1003, slot: 'arm', name: 'white shield of the Holy', rent: 1900, min: 2, dex: 3, ac: -17, mvRegen: 10,
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
];

const headers = [
  { id: 'slot', label: 'slot', component: <div style={{ width: 36 }}>slot</div> },
  { id: 'name', label: 'item', component: <div style={{ width: 240 }}>item</div> },
  { id: 'str', label: 'str' },
  { id: 'min', label: 'min' },
  { id: 'dex', label: 'dex' },
  { id: 'con', label: 'con' },
  { id: 'per', label: 'per' },
  { id: 'spi', label: 'spi' },
  { id: 'ac', label: 'ac' },
  { id: 'align', label: 'align' },
  { id: 'rent', label: 'rent' },
  { id: 'damroll', label: 'damroll' },
  { id: 'hitroll', label: 'hitroll' },
  { id: 'mitigation', label: 'mitigation' },
  { id: 'accuracy', label: 'accuracy' },
  { id: 'spellDam', label: 'spell dmg' },
  { id: 'spellCrit', label: 'spell crit' },
  { id: 'spellRedux', label: 'spell redux' },
  { id: 'concentration', label: 'concentration' },
  { id: 'hpRegen', label: 'hpRegen' },
  { id: 'mvRegen', label: 'mvRegen' },
  { id: 'maRegen', label: 'maRegen' },
];

const EquipmentList = () => {
  const classes = useStyles(items);
  const [goingUp, setGoingUp] = useState(false);

  const handleScroll = (event) => {
    const position = event.target.scrollTop;
    setGoingUp(position > 0);
  };

  return (
    <TableContainer className={classes.root} onScroll={handleScroll}>
      <Table className={classes.table}>
        <TableHead
          className={classes.thead}
          style={{ backgroundColor: goingUp ? '#000' : '' }}
        >
          <TableRow>
            {headers.map(header => (
              <TableCell key={header.id} className={classes.cell}>
                {header.component || header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className={classes.tbody}>
          {items.map(item => (
            <TableRow key={item.id}>
              {headers.map(header => (
                <TableCell key={header.id} className={classes.cell}>
                  {item[header.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EquipmentList;
