import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 600,
    marginLeft: 7,
  },
  stat: {
    color: '#DE2E2E',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    width: 32,
  },
}, { name: 'Mui_Styles_MeleeStats' });

const MeleeStats = props => {
  const {
    stats: {
      hitroll,
      damroll,
      mitigation,
    },
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat}>{hitroll}</span>
      <span className={classes.stat}>{damroll}</span>
      <span className={classes.stat}>{mitigation}</span>
    </div>
  );
};

MeleeStats.propTypes = {
  stats: PropTypes.shape({
    hitroll: PropTypes.number,
    damroll: PropTypes.number,
    mitigation: PropTypes.number,
    parry: PropTypes.number,
    damcap: PropTypes.number,
  }).isRequired,
};

export default MeleeStats;
