import { useRecoilValue } from 'recoil';
import { makeStyles } from '@material-ui/styles';
import { finalStatsState } from 'data/characterState';
import { STATS_SCHEMA } from 'data/constants';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    fontFamily: 'inherit',
    fontWeight: 600,
  },
  stat: {
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
}, { name: 'Mui_Styles_FinalStats' });

const FinalStats = () => {
  const classes = useStyles();
  const { str, min, dex, con, per, spi } = useRecoilValue(finalStatsState);

  return (
    <main className={classes.root}>
      <section className={classes.stat} style={{ color: STATS_SCHEMA.STR.color }}>{str}</section>
      <section className={classes.stat} style={{ color: STATS_SCHEMA.MIN.color }}>{min}</section>
      <section className={classes.stat} style={{ color: STATS_SCHEMA.DEX.color }}>{dex}</section>
      <section className={classes.stat} style={{ color: STATS_SCHEMA.CON.color }}>{con}</section>
      <section className={classes.stat} style={{ color: STATS_SCHEMA.PER.color }}>{per}</section>
      <section className={classes.stat} style={{ color: STATS_SCHEMA.SPI.color }}>{spi}</section>
    </main>
  );
};

export default FinalStats;
