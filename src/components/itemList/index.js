import { useRef, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import IconHead from 'components/iconHead';
import { makeStyles } from '@material-ui/styles';
import items from 'data/dummy';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    background: 'rgba(0, 0, 0, .5)',
    borderRadius: '5px 5px 0 0',
    borderBottom: '2px solid rgba(66, 60, 60, 0.75)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
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
    '& [data-value=str]': {
      color: theme.palette.stats.str,
    },
    '& [data-value=min]': {
      color: theme.palette.stats.min,
    },
    '& [data-value=dex]': {
      color: theme.palette.stats.dex,
    },
    '& [data-value=con]': {
      color: theme.palette.stats.con,
    },
    '& [data-value=per]': {
      color: theme.palette.stats.per,
    },
    '& [data-value=spi]': {
      color: theme.palette.stats.spi,
    },
  },
  cell: {
    fontFamily: 'inherit',
    padding: 0,
    border: 'unset',
  },
  pagination: {
    position: 'sticky',
    bottom: 0,
    display: 'contents !important',
    color: '#fff',
    '& .MuiToolbar-root': {
      height: 36,
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
}), { name: 'Mui_Styles_ItemList' });

const headers = [
  {
    id: 'slot', label: 'slot', width: 65, align: 'flex-start', hideBorder: true,
  },
  {
    id: 'name', label: 'item', width: 250, align: 'flex-start',
  },
  {
    id: 'str', label: 'str', component: <IconHead leftEnd iconPath="/winged-sword.png" label="str" />, width: 40,
  },
  {
    id: 'min', label: 'min', component: <IconHead iconPath="/spell-book.png" label="min" />, width: 40,
  },
  {
    id: 'dex', label: 'dex', component: <IconHead iconPath="/high-five.png" label="dex" />, width: 40,
  },
  {
    id: 'con', label: 'con', component: <IconHead iconPath="/heart-wings.png" label="con" />, width: 40,
  },
  {
    id: 'per', label: 'per', component: <IconHead iconPath="/spyglass.png" label="per" />, width: 40,
  },
  {
    id: 'spi', label: 'spi', component: <IconHead rightEnd iconPath="/vine-leaf.png" label="spi" />, width: 40,
  },
  { id: 'ac', label: 'ac', width: 35 },
  { id: 'align', label: 'align', width: 55 },
  { id: 'rent', label: 'rent', width: 50 },
  {
    id: 'damroll', label: 'damroll', component: <IconHead leftEnd iconPath="/sword-wound.png" label="dam" />, width: 40,
  },
  {
    id: 'hitroll', label: 'hitroll', component: <IconHead iconPath="/sword-wound.png" label="hit" />, width: 40,
  },
  {
    id: 'mitigation', label: 'mitigation', component: <IconHead rightEnd iconPath="/shield-reflect.png" label="mit" />, width: 40,
  },
  {
    id: 'accuracy', label: 'accuracy', component: <IconHead leftEnd rightEnd iconPath="/high-shot.png" label="acc" />, width: 40,
  },
  {
    id: 'spellDam', label: 'spellDam', component: <IconHead leftEnd iconPath="/spell-book.png" label="dam" />, width: 40,
  },
  {
    id: 'spellCrit', label: 'spellCrit', component: <IconHead iconPath="/spell-book.png" label="crit" />, width: 40,
  },
  {
    id: 'spellRedux', label: 'spellRedux', component: <IconHead iconPath="/spell-book.png" label="rdux" />, width: 40,
  },
  {
    id: 'concentration', label: 'concentration', component: <IconHead rightEnd iconPath="/spell-book.png" label="conc" />, width: 40,
  },
  {
    id: 'hpRegen', label: 'hpRegen', component: <IconHead leftEnd iconPath="/hpRegen.png" label="hpr" />, width: 40,
  },
  {
    id: 'mvRegen', label: 'mvRegen', component: <IconHead iconPath="/mvRegen.png" label="mvr" />, width: 40,
  },
  {
    id: 'maRegen', label: 'maRegen', component: <IconHead rightEnd iconPath="/maRegen.png" label="mar" />, width: 40,
  },
  {
    id: 'test', label: 'test', width: 120, align: 'flex-start',
  },
];

const ItemList = props => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const classes = useStyles(items);
  const tableEl = useRef(null);

  const handleScroll = event => {
    // eslint-disable-next-line no-undef
    const mar = document.querySelector('.Mui_Styles_CharacterMarquee-root');
    const pos = event.target.scrollLeft;
    tableEl.current.style.left = `${-pos}px`;
    if (mar) {
      mar.style.marginLeft = `${-pos}px`;
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
                  <TableCell
                    key={header.id}
                    style={{ width: header?.width }}
                    className={classes.cell}
                  >
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
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(item => (
                <TableRow key={item.id}>
                  {headers.map(header => (
                    <TableCell
                      key={header.id}
                      onClick={props.setTest}
                      style={{ width: header?.width, borderRight: header.hideBorder ? 'unset' : '' }}
                      className={classes.cell}
                    >
                      <div data-value={header.id}>{item[header.id]}</div>
                    </TableCell>
                  ))}
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ItemList;
