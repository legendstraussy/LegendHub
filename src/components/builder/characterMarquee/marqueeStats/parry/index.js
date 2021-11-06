import { useRecoilValue } from 'recoil';
import { meleeStatsState } from 'data/characterState';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 'bold',
  },
  stat: {
    color: theme.palette.main.blue,
    display: 'flex',
    justifyContent: 'center',
    fontSize: 14,
    width: 40,
  },
}), { name: 'Mui_Styles_ParryStat' });

const ParryStat = () => {
  const { parry } = useRecoilValue(meleeStatsState);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.stat}>{parry}</span>
    </div>
  );
};

export default ParryStat;
