import { useCallback, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import IconHead from 'components/common/iconHead';
import { makeStyles } from '@material-ui/styles';
import fetchItems from 'data/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  headerContainer: {
    marginTop: 20,
    background: 'rgba(0, 0, 0, .5)',
    borderRadius: '5px 5px 0 0',
    borderBottom: '2px solid rgba(66, 60, 60, 0.75)',
  },
  bodyContainer: {
    height: 2000,
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
      height: '35px !important',
      borderBottom: '1px solid rgba(45, 40, 40, .75)',
    },
    '& .MuiTableCell-body': {
      color: '#fff',
      whiteSpace: 'nowrap',
      borderRight: '1px solid rgba(64, 51, 51, .75)',
    },
    '& [data-value=slot], & [data-value=name]': { // TODO: move out to generic classes
      padding: '0 10px',
    },
    '& [data-value=name]': { // TODO: move out to generic classes
      width: 'inherit',
      color: theme.palette.link,
      fontWeight: 100,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '& [data-value=str]': {
      color: theme.palette.main.red,
    },
    '& [data-value=min]': {
      color: theme.palette.main.purple,
    },
    '& [data-value=dex]': {
      color: theme.palette.main.blue,
    },
    '& [data-value=con]': {
      color: theme.palette.main.yellow,
    },
    '& [data-value=per]': {
      color: theme.palette.main.cyan,
    },
    '& [data-value=spi]': {
      color: theme.palette.main.green,
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
      height: 35,
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
  check: {
    width: '.75em',
    color: theme.palette.main.green,
  },
  test: {
    '& :hover': {
      '& > span': {
        opacity: '1 !important',
        width: 'max-content !important',
        transition: 'opacity 1s ease-in-out',
      },
    },
  },
}), { name: 'Mui_Styles_HubTable' });

const HubTable = props => {
  const { headers = [], footer = true, Tools } = props;
  const tableEl = useRef(null);
  const hoverRecord = useRef(0);
  const [showTools, setShowTools] = useState();
  const [order, setOrder] = useState(null);
  const [orderBy, setOrderBy] = useState(null);
  const [filters] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const { data } = useQuery(['items', page, rowsPerPage, order, orderBy, filters], () => fetchItems({
    page, rowsPerPage, order, orderBy, filters,
  }), { keepPreviousData: true, initialData: { items: [], total: 0 } });
  const { items, total } = data;
  const classes = useStyles(props);

  const handleScroll = event => {
    // eslint-disable-next-line no-undef
    const mar = document.querySelector('.Mui_Styles_Builder-marquee');
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
    }
  };

  const handleMouseOver = (item) => {
    if (showTools === item.id) return;
    hoverRecord.current = item.id;
    console.log('bingo', hoverRecord.current)
    if (showTools !== item.id) {
      setShowTools(item.id);
    }
  };

  const handleMouseOut = (item) => {
    if (showTools !== item.id) {
      setShowTools(null);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Table ref={tableEl} style={{ position: 'relative', width: 'max-content' }}>
          <TableHead
            className={classes.thead}
          >
            <TableRow>
              {headers.map(header => (
                <TableCell
                  key={header.id}
                  style={{
                    width: header?.width,
                    textAlign: header?.align ?? 'center',
                  }}
                  className={clsx(classes?.cell, header?.type)}
                  onClick={() => handleSortChange(header)}
                >
                  {header?.type === 'icon'
                    ? (
                      <IconHead
                        leftEnd={header?.leftEnd}
                        rightEnd={header?.rightEnd}
                        iconPath={header?.iconPath}
                        label={header?.label}
                        isSorting={orderBy === header?.id}
                        order={order}
                        width={header?.width}
                      />
                    )
                    : (
                      <div
                        style={{ justifyContent: header.align || 'center' }}
                        data-value={header.id}
                      >
                        {header.label}
                      </div>
                    )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </div>
      <div className={classes.bodyContainer} onScroll={handleScroll}>
        <Table className={classes.table}>
          <TableBody className={classes.tbody}>
            {items?.map(item => (
              <TableRow
                key={item.id}
                // onMouseOut={() => handleMouseOut(item)}
                // onMouseOver={() => handleMouseOver(item)}
                hover
              >
                {headers.map(header => (
                  <TableCell
                    key={header.id}
                    style={{
                      width: header?.width,
                      borderRight: header.hideBorder ? 'unset' : '',
                      textAlign: header?.align ?? 'center',
                    }}
                    className={clsx(classes?.cell, header?.type, classes.test)}
                  >
                    <div
                      key={item.id}
                      style={{
                        width: header.id === 'name' ? header?.width : '', display: header.id === 'name' ? 'flex' : '', justifyContent: 'center', alignItems: 'center', height: header.id === 'name' ? 35 : '',
                      }}
                    >
                      <div data-value={header.id}>
                        {typeof item[header.id] === 'boolean'
                          ? <CheckIcon className={classes.check} />
                          : item[header.id]}
                      </div>
                      {header.id === 'name' && Tools && (
                        <span style={{ opacity: 0, width: 0 }}>
                          <Tools show />
                        </span>
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {footer && (
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
      )}
    </div>
  );
};

HubTable.propTypes = {
  footer: PropTypes.bool,
  headers: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  Tools: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
};

export default HubTable;
