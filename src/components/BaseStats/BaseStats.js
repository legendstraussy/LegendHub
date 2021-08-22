import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontSize: '8pt',
    fontWeight: 700,
  },
  str: {
    color: '#DE2E2E',
    fontSize: '10pt',
    margin: '0 .5em',
  },
  min: {
    color: '#A57BF1',
    fontSize: '10pt',
    margin: '0 .5em',
  },
  dex: {
    color: '#2E94FA',
    fontSize: '10pt',
    margin: '0 .5em',
  },
  con: {
    color: '#FFD874',
    fontSize: '10pt',
    margin: '0 .5em',
  },
  per: {
    color: '#31DBB9',
    fontSize: '10pt',
    margin: '0 .5em',
  },
  spi: {
    color: '#71DE71',
    fontSize: '10pt',
    margin: '0 .5em',
  },
}, { name: 'Mui_Styles_BaseStats' });

const BaseStats = props => {
  const {
    stats: {
      con,
      dex,
      min,
      per,
      spi,
      str,
    },
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.str}>{str}</span>
      <span className={classes.min}>{min}</span>
      <span className={classes.dex}>{dex}</span>
      <span className={classes.con}>{con}</span>
      <span className={classes.per}>{per}</span>
      <span className={classes.spi}>{spi}</span>
    </div>
  );
};

BaseStats.propTypes = {
  stats: PropTypes.shape({
    con: PropTypes.number,
    dex: PropTypes.number,
    min: PropTypes.number,
    per: PropTypes.number,
    spi: PropTypes.number,
    str: PropTypes.number,
  }).isRequired,
};

export default BaseStats;
