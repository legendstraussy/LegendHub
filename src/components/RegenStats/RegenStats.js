import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  hp: {
    color: '#FFD874',
    fontSize: '10pt',
    margin: '0 .5em',
  },
  mv: {
    color: '#2E94FA',
    fontSize: '10pt',
    margin: '0 .5em',
  },
  ma: {
    color: '#A57BF1',
    fontSize: '10pt',
    margin: '0 .5em',
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
      <span className={classes.hp}>{hpRegen}</span>
      <span className={classes.mv}>{mvRegen}</span>
      <span className={classes.ma}>{maRegen}</span>
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