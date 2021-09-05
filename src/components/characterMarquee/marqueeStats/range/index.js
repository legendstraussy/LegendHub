import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 'bold',
  },
  stat: {
    color: '#31DBB9',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    width: 32,
  },
}, { name: 'Mui_Styles_RangeStats' });

const RangeStats = props => {
  const {
    stats: {
      accuracy,
    },
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat}>{accuracy}</span>
    </div>
  );
};

RangeStats.propTypes = {
  stats: PropTypes.shape({
    accuracy: PropTypes.number,
  }).isRequired,
};

export default RangeStats;
