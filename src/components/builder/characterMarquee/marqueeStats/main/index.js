import { useRecoilValue } from 'recoil';
import { makeStyles } from '@material-ui/styles';
import { mainStatsState } from 'data/characterState';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  stat: {
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },
  str: {
    color: '#DE2E2E',
  },
  min: {
    color: '#A57BF1',
  },
  dex: {
    color: '#2E94FA',
  },
  con: {
    color: '#FFD874',
  },
  per: {
    color: '#31DBB9',
  },
  spi: {
    color: '#71DE71',
  },
}, { name: 'Mui_Styles_BaseStats' });

const BaseStats = () => {
  const classes = useStyles();
  const {
    str, min, dex, con, per, spi,
  } = useRecoilValue(mainStatsState);

  return (
    <div className={classes.root}>
      <span className={`${classes.stat} ${classes.str}`}>{str}</span>
      <span className={`${classes.stat} ${classes.min}`}>{min}</span>
      <span className={`${classes.stat} ${classes.dex}`}>{dex}</span>
      <span className={`${classes.stat} ${classes.con}`}>{con}</span>
      <span className={`${classes.stat} ${classes.per}`}>{per}</span>
      <span className={`${classes.stat} ${classes.spi}`}>{spi}</span>
    </div>
  );
};

export default BaseStats;
