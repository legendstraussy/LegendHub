import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import StatInput from 'components/builder/statInput';
import theme from 'utils/theme';
import { stats as statsConstants } from 'data/constants';

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

const stats = [
  {
    name: 'str',
    raw: 12,
    uneq: 14,
    swap: -3,
    final: 19,
  },
  {
    name: 'min',
    raw: 45,
    uneq: 50,
    swap: 0,
    final: 113,
  },
  {
    name: 'dex',
    raw: 25,
    uneq: 32,
    swap: 0,
    final: 60,
  },
  {
    name: 'con',
    raw: 44,
    uneq: 49,
    swap: 1,
    final: 72,
  },
  {
    name: 'per',
    raw: 33,
    uneq: 35,
    swap: 2,
    final: 40,
  },
  {
    name: 'spi',
    raw: 16,
    uneq: 19,
    swap: 0,
    final: 43,
  },
];

const StatsGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item xs={2} className={classes.label}>&nbsp;</Grid>
        <Grid item xs={2} className={classes.label}>raw</Grid>
        <Grid item xs={2} className={classes.label}>uneq.</Grid>
        <Grid item xs={2} className={classes.label}>swap</Grid>
        <Grid item xs={2} className={classes.label}>final</Grid>
      </Grid>
      {stats.map(stat => (
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
              color: theme.palette.main[statsConstants[stat.name]],
              fontSize: '14px',
              fontWeight: '700',
            }}
          >
            {stat.final}
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default StatsGrid;
