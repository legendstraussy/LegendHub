import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 600,
    marginLeft: '.4em',
  },
  stat: {
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
  },
  str: {
    color: '#DE2E2E',
  },
  min: {
    color: '#A57BF1',
  },
  dex: {
    color: '#2E94FA',
  },
  con: {
    color: '#FFD874',
  },
  per: {
    color: '#31DBB9',
  },
  spi: {
    color: '#71DE71',
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
      <span className={`${classes.stat} ${classes.str}`}>{str}</span>
      <span className={`${classes.stat} ${classes.min}`}>{min}</span>
      <span className={`${classes.stat} ${classes.dex}`}>{dex}</span>
      <span className={`${classes.stat} ${classes.con}`}>{con}</span>
      <span className={`${classes.stat} ${classes.per}`}>{per}</span>
      <span className={`${classes.stat} ${classes.spi}`}>{spi}</span>
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
