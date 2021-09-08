import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import theme from 'utils/theme';

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
  input: {
    width: 45,
    height: 30,
    fontFamily: 'Open Sans',
    fontSize: '12px',
    border: '1px solid rgba(105, 85, 85, .75)',
    display: 'flex',
    padding: '4px',
    background: '#222222',
    borderRadius: '5px',
    color: '#fff',
    outline: 'unset',
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

const StatInput = ({ stat }) => {
  const [value, setValue] = useState(stat);
  const classes = useStyles();

  return (
    <input
      type="number"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className={classes.input}
    />
  );
};

StatInput.propTypes = {
  stat: PropTypes.shape({}),
};

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
              color: theme.palette.stats[stat.name],
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
