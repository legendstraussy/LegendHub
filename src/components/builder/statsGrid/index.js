import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import StatsGridRow from 'components/builder/statsGridRow';
import StatsGridHeaders from 'components/builder/statsGridHeaders';
import { mainStatsState } from 'data/characterState';
import { useRecoilValue } from 'recoil';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridRowGap: '.5em',
  },
}, { name: 'Mui_Styles_StatsGrid' });

const StatsGrid = () => {
  const [headers] = useState(['raw', 'swap', 'uneq', 'final']);
  const {
    str, min, dex, con, per, spi,
  } = useRecoilValue(mainStatsState);
  const classes = useStyles();

  return (
    <main>
      <StatsGridHeaders headers={headers} offset />
      <section className={classes.root}>
        <StatsGridRow name="str" stat={str} />
        <StatsGridRow name="min" stat={min} />
        <StatsGridRow name="dex" stat={dex} />
        <StatsGridRow name="con" stat={con} />
        <StatsGridRow name="per" stat={per} />
        <StatsGridRow name="spi" stat={spi} />
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
