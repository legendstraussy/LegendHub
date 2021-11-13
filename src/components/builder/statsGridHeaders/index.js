import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: headerLength => `repeat(${headerLength}, 1fr)`,
    justifyItems: 'center',
    marginBottom: 5,
    fontSize: 12,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_StatsGridHeaders' });

const StatsGridHeaders = ({ headers = [], offset }) => {
  const headerLength = offset ? headers.length + 1 : headers.length;
  const classes = useStyles(headerLength);

  return (
    <header className={classes.root}>
      {offset && <div>&nbsp;</div>}
      {headers.map((header, i) => (
        <div key={i}>{header}</div>
      ))}
    </header>
  );
};

StatsGridHeaders.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.string,
  ),
  offset: PropTypes.bool,
};

export default StatsGridHeaders;
