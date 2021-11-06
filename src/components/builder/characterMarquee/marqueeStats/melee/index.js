import { useRecoilValue } from 'recoil';
import { meleeStatsState } from 'data/characterState';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  stat: {
    color: '#DE2E2E',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 14,
    width: 40,
  },
}, { name: 'Mui_Styles_MeleeStats' });

const MeleeStats = () => {
  const { hitroll, damroll, mitigation } = useRecoilValue(meleeStatsState);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat}>{damroll}</span>
      <span className={classes.stat}>{hitroll}</span>
      <span className={classes.stat}>{mitigation}</span>
    </div>
  );
};

export default MeleeStats;
