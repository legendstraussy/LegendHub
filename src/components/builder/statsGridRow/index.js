import { useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import StatInput from 'components/builder/statInput';
import useCharacterManager from 'hooks/useCharacterManager';
import { STAT_TYPES } from 'data/constants';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridRowGap: '.5em',
    justifyItems: 'center',
    alignItems: 'center',
    marginBottom: 5,
    fontSize: 12,
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  final: {
    color: props => props.color ?? '#fff',
    fontSize: 14,
    fontWeight: 700,
  },
}, { name: 'Mui_Styles_StatsGridRow' });

const StatsGridRow = props => {
  const { name, stat } = props;
  const { updateStat } = useCharacterManager();
  const classes = useStyles(props);

  const handleUpdateStat = useCallback(stat => updateStat(STAT_TYPES.BASE_STATS)(name, stat), [name, updateStat]);
  const handleUpdateSwap = useCallback(stat => updateStat(STAT_TYPES.SWAP_STATS)(name, stat), [name, updateStat]);

  return (
    <main className={classes.root}>
      <section className={classes.name}>{name}</section>
      <StatInput updateStat={handleUpdateStat} stat={stat?.raw} min={0} max={50} />
      <section>{stat?.uneq}</section>
      <StatInput updateStat={handleUpdateSwap} stat={stat?.swap} min={-3} max={3} />
      <section className={classes.final}>{stat?.final}</section>
    </main>
  );
};

StatsGridRow.propTypes = {
  name: PropTypes.string,
  stat: PropTypes.shape({
    raw: PropTypes.number,
    uneq: PropTypes.number,
    swap: PropTypes.number,
    final: PropTypes.number,
  }),
};

export default StatsGridRow;
