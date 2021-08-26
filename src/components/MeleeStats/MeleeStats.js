import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 600,
    padding: '0 .3em',
  },
  stat: {
    color: '#DE2E2E',
    fontSize: '10pt',
    width: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}, { name: 'Mui_Styles_MeleeStats' });

const MeleeStats = props => {
  const {
    stats: {
      hitroll,
      damroll,
      mitigation,
      // parry,
      // damcap,
    },
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat}>{hitroll}</span>
      <span className={classes.stat}>{damroll}</span>
      <span className={classes.stat}>{mitigation}</span>
      {/* <span className={classes.stat}>{parry}</span>
      <span className={classes.stat}>{damcap}</span> */}
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
