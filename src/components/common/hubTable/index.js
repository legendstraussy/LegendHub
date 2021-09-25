import React, { useRef, useState } from 'react';
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
    '& [data-value=slot], & [data-value=name]': { // TODO: move out to generic classes
      padding: '0 9px',
    },
    '& [data-value=name]': { // TODO: move out to generic classes
      width: 'inherit !important',
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
  pagination: {
    position: 'sticky',
    bottom: 0,
    display: 'contents !important',
    color: '#fff',
  },
  check: {
    width: '.75em',
    color: theme.palette.main.green,
  },
}), { name: 'Mui_Styles_HubTable' });

const HubTable = props => {
  const { headers = [], footer = true } = props;
  const tableEl = useRef(null);
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
              >
                {headers.map(header => (
                  <TableCell
                    key={header.id}
                    style={{
                      width: header?.width,
                      borderRight: header.hideBorder ? 'unset' : '',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        width: header?.id === 'name' ? 'inherit' : '',
                        justifyContent: header?.align ?? 'center',
                        alignItems: 'center',
                      }}
                      className={header?.test}
                    >
                      <div
                        data-value={header.id}
                      >
                        {item[header.id]}
                      </div>
                      {header?.tools
                        && React.cloneElement(header?.tools, { item })}
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
};

export default HubTable;
