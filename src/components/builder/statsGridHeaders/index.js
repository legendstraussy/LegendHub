import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    marginBottom: 5,
    fontSize: 12,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_StatsGridHeaders' });

const StatsGridHeaders = props => {
  const { finalLabel, rawLabel, swapLabel, uneqLabel } = props;
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <section>&nbsp;</section>
      <section>{rawLabel}</section>
      <section>{uneqLabel}</section>
      <section>{swapLabel}</section>
      <section>{finalLabel}</section>
    </main>
  );
};

StatsGridHeaders.propTypes = {
  finalLabel: PropTypes.string,
  rawLabel: PropTypes.string,
  swapLabel: PropTypes.string,
  uneqLabel: PropTypes.string,
};

export default StatsGridHeaders;
