import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 'bold',
  },
  stat: {
    color: theme.palette.stats.dex,
    display: 'flex',
    justifyContent: 'center',
    fontSize: 14,
    width: 40,
  },
}), { name: 'Mui_Styles_ParryStat' });

const ParryStat = props => {
  const {
    stats: {
      parry,
    },
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat}>{parry}</span>
    </div>
  );
};

ParryStat.propTypes = {
  stats: PropTypes.shape({
    parry: PropTypes.number,
  }).isRequired,
};

export default ParryStat;
