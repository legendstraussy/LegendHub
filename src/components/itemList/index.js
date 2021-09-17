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
    '& .header': {
      color: '#fff',
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
    // '& .header': {
    //   padding: '0 10px',
    //   fontSize: 14,
    //   fontWeight: 100,
    //   textAlign: 'center',
    // },
    // '& .icon': {
    //   textAlign: 'center',
    // },
    '& [data-value=slot], & [data-value=name]': { // TODO: move out to generic classes
      padding: '0 10px',
    },
    '& [data-value=name]': { // TODO: move out to generic classes
      color: theme.palette.link,
      fontWeight: 100,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const { isLoading, error, data} = useQuery(['items', page, rowsPerPage, order, orderBy, filters],() => fetchItems({page, rowsPerPage, order, orderBy, filters}), { keepPreviousData : true, initialData: { items: [], total: 0 }});
  const { items, total } = data;
  const classes = useStyles();
  const tableEl = useRef(null);

  const headers = [
    {
      id: 'slot', label: 'slot', class: 'header', width: 65, align: 'right', hideBorder: true,
    },
    {
      id: 'name', label: 'item', class: 'header', width: 250, align: 'left',
    },
    {
      id: 'str', label: 'str', class: 'icon', leftEnd: true, iconPath: '/winged-sword.png', width: 40,
    },
    {
      id: 'min', label: 'min', class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'dex', label: 'dex', class: 'icon', iconPath: '/high-five.png', width: 40,
    },
    {
      id: 'con', label: 'con', class: 'icon', iconPath: '/heart-wings.png', width: 40,
    },
    {
      id: 'per', label: 'per', class: 'icon', iconPath: '/spyglass.png', width: 40,
    },
    {
      id: 'spi', label: 'spi', rightEnd: true, class: 'icon', iconPath: '/vine-leaf.png', width: 40,
    },
    { id: 'ac', label: 'ac', class: 'header', width: 35 },
    { id: 'align', label: 'align', class: 'header', width: 55 },
    { id: 'rent', label: 'rent', class: 'header', width: 50 },
    {
      id: 'damroll', label: 'dam', leftEnd: true, class: 'icon', iconPath: '/sword-wound.png', width: 40,
    },
    {
      id: 'hitroll', label: 'hit', class: 'icon', iconPath: '/sword-wound.png', width: 40,
    },
    {
      id: 'mitigation', label: 'mit', rightEnd: true, class: 'icon', iconPath: '/shield-reflect.png', width: 40,
    },
    {
      id: 'parry', label: 'parry', rightEnd: true, leftEnd: true, class: 'icon', iconPath: '/fencer.png', width: 40,
    },
    {
      id: 'accuracy', label: 'acc', leftEnd: true, rightEnd: true, class: 'icon', iconPath: '/high-shot.png', width: 40,
    },
    {
      id: 'spellDam', label: 'dam', leftEnd: true, class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'spellCrit', label: 'crit', class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'spellRedux', label: 'rdux', class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'concentration', label: 'conc', rightEnd: true, class: 'icon', iconPath: '/spell-book.png', width: 40,
    },
    {
      id: 'hpRegen', label: 'hpr', leftEnd: true, class: 'icon', iconPath: '/hpRegen.png', width: 40,
    },
    {
      id: 'mvRegen', label: 'mvr', class: 'icon', iconPath: '/mvRegen.png', width: 40,
    },
    {
      id: 'maRegen', label: 'mar', rightEnd: true, class: 'icon', iconPath: '/maRegen.png', width: 40,
    },
    {
      id: 'isHeroic', label: 'heroic', class: 'header', width: 100,
    },
    {
      id: 'isLimited', label: 'limited', class: 'header', width: 100,
    },
    {
      id: 'isUnique', label: 'unique', class: 'header', width: 100,
    }
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
        <div role="button" onClick={() => setFilters({...filters, isHeroic: !filters.isHeroic })}>test</div>
        <div ref={tableEl} style={{ position: 'relative' }}>
          <Table style={{ width: 'max-content' }}>
            <TableHead
              className={classes.thead}
            >
              <TableRow>
                {headers.map(header => (
                  <TableCell
                    key={header.id}
                    style={{ 
                      width: header?.width,
                      textAlign: header?.align ? header?.align : 'center'
                    }}
                    className={`${classes.cell} ${header.class}`}
                    onClick={() => handleSortChange(header)}
                  >
                    {header?.class === 'icon'
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
                    style={{ 
                      width: header?.width,
                      borderRight: header.hideBorder ? 'unset' : '',
                      textAlign: header?.align ? header?.align : 'center'
                    }}
                    className={`${classes.cell} ${header?.class}`}
                  >
                    <div data-value={header.id}>
                      {typeof item[header.id] === 'boolean' 
                        ? item[header.id] ? 'true' : 'false'
                        : item[header.id]
                      }
                    </div>
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
