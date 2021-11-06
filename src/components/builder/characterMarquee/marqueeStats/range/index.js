import { useRecoilValue } from 'recoil';
import { rangeStatsState } from 'data/characterState';
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
    fontSize: 14,
    width: 40,
  },
}, { name: 'Mui_Styles_RangeStats' });

const RangeStats = () => {
  const { accuracy } = useRecoilValue(rangeStatsState);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat}>{accuracy}</span>
    </div>
  );
};

export default RangeStats;
