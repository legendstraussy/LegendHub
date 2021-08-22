import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontSize: '8pt',
    fontWeight: 700,
  },
  stat: {
    margin: '0 .75em',
    display: 'flex',
    alignItems: 'baseline',
  },
  label: {
    textTransform: 'uppercase',
    margin: '0 .7em 0 0',
  },
  value: {
    color: '#00FF00',
    fontSize: '10pt',
  },
}, { name: 'Mui_Styles_HealthStat' });

const HealthStat = props => {
  const { label, stat } = props;
  const classes = useStyles();

  return (
    <div className={classes.stat}>
      <span className={classes.label}>{`${label}:`}</span>
      <span className={classes.value}>{stat}</span>
    </div>
  );
};

HealthStat.propTypes = {
  label: PropTypes.string.isRequired,
  stat: PropTypes.number.isRequired,
};

export default HealthStat;
