import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  stat: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    width: 33,
  },
  hp: {
    color: '#FFD874',
  },
  mv: {
    color: '#2E94FA',
  },
  ma: {
    color: '#A57BF1',
  },
}, { name: 'Mui_Styles_RegenStats' });

const RegenStats = props => {
  const {
    stats: {
      hpRegen,
      mvRegen,
      maRegen,
    },
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={`${classes.stat} ${classes.hp}`}>{hpRegen}</span>
      <span className={`${classes.stat} ${classes.mv}`}>{mvRegen}</span>
      <span className={`${classes.stat} ${classes.ma}`}>{maRegen}</span>
    </div>
  );
};

RegenStats.propTypes = {
  stats: PropTypes.shape({
    hpRegen: PropTypes.number,
    mvRegen: PropTypes.number,
    maRegen: PropTypes.number,
  }).isRequired,
};

export default RegenStats;
