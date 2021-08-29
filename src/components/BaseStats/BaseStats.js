import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontSize: '14px',
    fontWeight: 600,
    width: '195px',
  },
  str: {
    color: '#DE2E2E',
    display: 'flex',
    justifyContent: 'center',
    width: '34px',
  },
  min: {
    color: '#A57BF1',
    display: 'flex',
    justifyContent: 'center',
    width: '34px',
  },
  dex: {
    color: '#2E94FA',
    display: 'flex',
    justifyContent: 'center',
    width: '34px',
  },
  con: {
    color: '#FFD874',
    display: 'flex',
    justifyContent: 'center',
    width: '34px',
  },
  per: {
    color: '#31DBB9',
    display: 'flex',
    justifyContent: 'center',
    width: '34px',
  },
  spi: {
    color: '#71DE71',
    display: 'flex',
    justifyContent: 'center',
    width: '34px',
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
