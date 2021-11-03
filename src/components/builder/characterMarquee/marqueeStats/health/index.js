import { useRecoilValue } from 'recoil';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { healthStatsState } from 'data/characterState';
import HealthStat from './healthStat/HealthStat';

const useStyles = makeStyles({
  root: {
    width: 202,
    display: 'flex',
    justifyContent: 'space-evenly',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  stat: {
    display: 'flex',
  },
}, { name: 'Mui_Styles_HealthStats' });

const HealthStats = props => {
  const { labelSize } = props;
  const { hp, mv, ma } = useRecoilValue(healthStatsState);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HealthStat label="hp" labelSize={labelSize} stat={hp} />
      <HealthStat label="mv" labelSize={labelSize} stat={mv} />
      <HealthStat label="ma" labelSize={labelSize} stat={ma} />
    </div>
  );
};

HealthStats.propTypes = {
  labelSize: PropTypes.number,
};

export default HealthStats;
