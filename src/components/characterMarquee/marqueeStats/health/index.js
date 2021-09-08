import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import HealthStat from './healthStat/HealthStat';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  stat: {
    display: 'flex',
  },
}, { name: 'Mui_Styles_HealthStats' });

const HealthStats = props => {
  const { labelSize } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HealthStat label="hp" labelSize={labelSize} stat={750} />
      <HealthStat label="mv" labelSize={labelSize} stat={827} />
      <HealthStat label="ma" labelSize={labelSize} stat={342} />
    </div>
  );
};

HealthStats.propTypes = {
  labelSize: PropTypes.string,
};

export default HealthStats;
