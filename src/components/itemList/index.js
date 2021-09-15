import { useRef, useState } from 'react';
import { useQuery } from 'react-query';
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
import fetchItems from 'data/actions';

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

const ItemList = props => {
  const [order, setOrder] = useState(null);
  const [orderBy, setOrderBy] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const { isLoading, error, data} = useQuery(['items', page, rowsPerPage, order, orderBy],() => fetchItems({page, rowsPerPage, order, orderBy}), { keepPreviousData : true, initialData: { items: [], total: 0 }});
  const { items, total } = data;
  const classes = useStyles();
  const tableEl = useRef(null);

  const headers = [
    {
      id: 'slot', label: 'slot', width: 65, align: 'flex-start', hideBorder: true,
    },
    {
      id: 'name', label: 'item', width: 250, align: 'flex-start',
    },
    {
      id: 'str', label: 'str', isIconHead: true, leftEnd: true, iconPath: '/winged-sword.png', width: 40,
    },
    {
      id: 'min', label: 'min', isIconHead: true, iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'dex', label: 'dex',  isIconHead: true, iconPath: '/high-five.png', width: 40,
    },
    {
      id: 'con', label: 'con',  isIconHead: true, iconPath: '/heart-wings.png', width: 40,
    },
    {
      id: 'per', label: 'per',  isIconHead: true, iconPath: '/spyglass.png', width: 40,
    },
    {
      id: 'spi', label: 'spi', rightEnd: true, isIconHead: true, iconPath: '/vine-leaf.png', width: 40,
    },
    { id: 'ac', label: 'ac', width: 35 },
    { id: 'align', label: 'align', width: 55 },
    { id: 'rent', label: 'rent', width: 50 },
    {
      id: 'damroll', label: 'dam', leftEnd: true, isIconHead: true, iconPath: '/sword-wound.png', width: 40,
    },
    {
      id: 'hitroll', label: 'hit', isIconHead: true, iconPath: '/sword-wound.png', width: 40,
    },
    {
      id: 'mitigation', label: 'mit', rightEnd: true, isIconHead: true, iconPath: '/shield-reflect.png', width: 40,
    },
    {
      id: 'accuracy', label: 'acc', leftEnd: true, rightEnd: true, isIconHead: true, iconPath: '/high-shot.png', width: 40,
    },
    {
      id: 'spellDam', label: 'dam', leftEnd: true, isIconHead: true, iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'spellCrit', label: 'crit', isIconHead: true, iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'spellRedux', label: 'rdux', isIconHead: true, iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'concentration', label: 'conc', rightEnd: true, isIconHead: true, iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'hpRegen', label: 'hpr', leftEnd: true, isIconHead: true, iconPath: '/hpRegen.png', width: 40,
    },
    {
      id: 'mvRegen', label: 'mvr', isIconHead: true, iconPath: '/mvRegen.png', width: 40,
    },
    {
      id: 'maRegen', label: 'mar', rightEnd: true, isIconHead: true, iconPath: '/maRegen.png', width: 40,
    },
    {
      id: 'test', label: 'test', width: 120, align: 'flex-start',
    },
  ];

  const handleScroll = event => {
    // eslint-disable-next-line no-undef
    const mar = document.querySelector('.Mui_Styles_CharacterMarquee-root');
    const pos = event.target.scrollLeft;
    tableEl.current.style.left = `${-pos}px`;
    if (mar) {
      mar.style.marginLeft = `${-pos}px`;
    }
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortChange = header => {
    const { id = '' } = header;
    if (!orderBy || orderBy !== id) {
      setOrderBy(id);
      setOrder('asc');
      return;
    }
    if (orderBy === id) {
      if (order) {
        setOrder(order === 'desc' ? null : 'desc');
      } else {
        setOrder('asc');
      }
      return;
    }
  }
  
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
                    onClick={() => handleSortChange(header)}
                  >
                    {header.isIconHead
                      ? <IconHead
                          leftEnd={header?.leftEnd}
                          rightEnd={header?.rightEnd}
                          iconPath={header?.iconPath}
                          label={header?.label}
                          isSorting={orderBy === header?.id}
                          order={order} 
                        />
                      : <div 
                          style={{ justifyContent: header.align || 'center' }}
                          data-value={header.id}>{header.label}
                        </div>
                    }
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
            {items?.map(item => (
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
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ItemList;
