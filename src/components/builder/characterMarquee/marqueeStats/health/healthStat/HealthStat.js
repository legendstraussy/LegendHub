import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
  },
  stat: {
    marginRight: '.65em',
    display: 'flex',
    alignItems: 'baseline',
  },
  label: {
    textTransform: 'uppercase',
    margin: '0 .7em 0 0',
    fontSize: props => props.labelSize ? props.labelSize : '10px',
    fontWeight: '600',
  },
  value: {
    color: '#71DE71',
    fontSize: '14px',
  },
}, { name: 'Mui_Styles_HealthStat' });

const HealthStat = props => {
  const { label, stat } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.stat}>
      <span className={classes.label}>{`${label}:`}</span>
      <span className={classes.value}>{stat}</span>
    </div>
  );
};

HealthStat.propTypes = {
  label: PropTypes.string,
  stat: PropTypes.number,
};

export default HealthStat;
