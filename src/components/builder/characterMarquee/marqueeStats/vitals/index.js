import { makeStyles } from '@material-ui/styles';
import { useRecoilValue } from 'recoil';
import { equipmentStatsState } from 'data/characterState';
import { STATS_SCHEMA } from 'data/constants';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 'bold',
  },
  stat: {
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    fontSize: 14,
  },
}, { name: 'Mui_Styles_VitalStats' });

const VitalStats = () => {
  const { hp, mv, ma } = useRecoilValue(equipmentStatsState);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat} style={{ color: STATS_SCHEMA.CON.color }}>{hp}</span>
      <span className={classes.stat} style={{ color: STATS_SCHEMA.DEX.color }}>{mv}</span>
      <span className={classes.stat} style={{ color: STATS_SCHEMA.MIN.color }}>{ma}</span>
    </div>
  );
};

export default VitalStats;
