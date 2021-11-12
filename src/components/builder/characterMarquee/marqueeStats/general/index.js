import { useRecoilValue } from 'recoil';
import { genericStatsState } from 'data/characterState';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: 'bold',
  },
  stat: {
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
  },
  ac: {
    width: 35,
  },
  align: {
    width: 55,
  },
  rent: {
    width: 50,
  },
}, { name: 'Mui_Styles_GenericStats' });

const GenericStats = () => {
  const { ac, align, rent } = useRecoilValue(genericStatsState);
  const classes = useStyles();

  // TODO: redo this
  return (
    <div className={classes.root}>
      <span className={`${classes.stat} ${classes.ac}`}>{ac}</span>
      <span
        className={`${classes.stat} ${classes.align}`}
      >
        {align}
      </span>
      <span className={`${classes.stat} ${classes.rent}`}>{rent}</span>
    </div>
  );
};

export default GenericStats;
