import { useRef } from 'react';
import { PropTypes } from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import HubTableHeader from 'components/common/hubTableHeader';
import HubTableCell from 'components/common/hubTableCell';
import { makeStyles } from '@material-ui/styles';
import useScroll from 'hooks/useScroll';

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
    background: 'rgba(0, 0, 0, .75)',
    overflow: 'auto !important',
  },
  table: {
    position: 'relative',
    width: 'max-content',
    fontFamily: 'Titillium Web',
  },
  thead: {
    position: 'sticky',
    top: 0,
    fontFamily: 'Titillium Web',
    fontSize: '10px',
    whiteSpace: 'nowrap',
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
  const {
    data = {},
    footer = true,
    headers = [],
    options = {},
    scrollRef = null,
    updateOptions,
  } = props;
  const {
    items = [],
    total = 0,
  } = data;
  const headersEl = useRef(null);
  const scroll = useScroll();
  const classes = useStyles(props);

  const handleScroll = event => {
    const pos = event.target.scrollLeft;
    if (scrollRef?.current) {
      scroll(scrollRef.current, pos);
    }
    scroll(headersEl.current, pos);
  };

  const handleChangePage = (_, newPage) => {
    updateOptions({ page: newPage });
  };

  const handleChangeRowsPerPage = event => {
    updateOptions({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  const handleSortChange = header => {
    const { id = '' } = header;
    if (!updateOptions) return;
    if (!options?.orderBy || options?.orderBy !== id) {
      updateOptions({ order: 'asc', orderBy: id });
    } else if (options?.orderBy === id) {
      if (options?.order) {
        updateOptions({ order: options?.order === 'desc' ? null : 'desc' });
      } else {
        updateOptions({ order: 'asc', orderBy: id });
      }
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Table ref={headersEl} className={classes.table}>
          <TableHead
            className={classes.thead}
          >
            <TableRow>
              {headers.map((header, i) => (
                <TableCell
                  key={i}
                  style={{
                    width: header?.width,
                  }}
                  onClick={() => handleSortChange(header)}
                >
                  {header?.customHeader
                    ? header.customHeader
                    : (
                      <HubTableHeader
                        id={header?.id}
                        label={header?.label}
                        className={header?.className}
                      />
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
            {items?.map((item, i) => (
              <TableRow
                key={i}
              >
                {headers.map((header, j) => (
                  <TableCell
                    key={j}
                    style={{
                      width: header?.width,
                    }}
                  >
                    {header?.renderRow
                      ? header.renderRow(item)
                      : (
                        <HubTableCell
                          label={header.id}
                          text={item[header.id]}
                          className={header.className}
                        />
                      )}
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
          rowsPerPage={options?.rowsPerPage}
          page={options?.page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
};

HubTable.propTypes = {
  data: PropTypes.shape({

  }),
  footer: PropTypes.bool,
  headers: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  options: PropTypes.shape({
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    order: PropTypes.string,
    orderBy: PropTypes.string,
  }),
  scrollRef: PropTypes.shape({
    current: PropTypes.shape({}),
  }),
  updateOptions: PropTypes.func,
};

export default HubTable;
