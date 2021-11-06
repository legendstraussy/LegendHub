import { makeStyles } from '@material-ui/styles';
import { useRecoilValue } from 'recoil';
import { healthStatsState } from 'data/characterState';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 'bold',
  },
  stat: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 14,
  },
  hp: {
    color: '#FFD874',
    width: 40,
  },
  mv: {
    color: '#2E94FA',
    width: 40,
  },
  ma: {
    color: '#A57BF1',
    width: 40,
  },
}, { name: 'Mui_Styles_VitalStats' });

const VitalStats = () => {
  const { hpRaw, mvRaw, maRaw } = useRecoilValue(healthStatsState);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={`${classes.stat} ${classes.hp}`}>{hpRaw}</span>
      <span className={`${classes.stat} ${classes.mv}`}>{mvRaw}</span>
      <span className={`${classes.stat} ${classes.ma}`}>{maRaw}</span>
    </div>
  );
};

export default VitalStats;
