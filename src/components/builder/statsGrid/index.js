import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import StatsGridRow from 'components/builder/statsGridRow';
import StatsGridHeaders from 'components/builder/statsGridHeaders';
import { mainStatsState } from 'data/characterState';
import { useRecoilValue } from 'recoil';

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
  grid: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 .5em 0',
    fontSize: '12px',
    textTransform: 'uppercase',
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
  },
}, { name: 'Mui_Styles_StatsGrid' });

const StatsGrid = () => {
  const [headers] = useState(['raw', 'swap', 'uneq', 'final']);
  const stats = useRecoilValue(mainStatsState);
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <StatsGridHeaders headers={headers} offset />
      <section>
        <StatsGridRow name="str" stat={stats.test} />
      </section>

      {/* <Grid container className={classes.grid}>
        <Grid item xs={2} className={classes.label}>&nbsp;</Grid>
        <Grid item xs={2} className={classes.label}>raw</Grid>
        <Grid item xs={2} className={classes.label}>uneq.</Grid>
        <Grid item xs={2} className={classes.label}>swap</Grid>
        <Grid item xs={2} className={classes.label}>final</Grid>
      </Grid> */}
      {/* <StatRow stat={} /> */}
      {/* {[].map(stat => (
        <Grid key={stat.name} container className={classes.grid}>
          <Grid item xs={2} className={classes.label}>{stat.name}</Grid>
          <Grid item xs={2} className={classes.label}>
            <StatInput stat={stat.raw} />
          </Grid>
          <Grid item xs={2} className={classes.label}>{stat.uneq}</Grid>
          <Grid item xs={2} className={classes.label}>
            <StatInput stat={stat.swap} />
          </Grid>
          <Grid
            item
            xs={2}
            className={classes.label}
            style={{
              // color: theme.palette.main[statsConstants[stat.name]],
              fontSize: '14px',
              fontWeight: '700',
            }}
          >
            {stat.final}
          </Grid>
        </Grid>
      ))} */}
    </main>
  );
};

export default StatsGrid;
