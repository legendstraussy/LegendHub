import { useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import StatInput from 'components/builder/statInput';
import useCharacterManager from 'hooks/useCharacterManager';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    justifyItems: 'center',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    textTransform: 'uppercase',
  },
}, { name: 'Mui_Styles_StatsGridRow' });

const StatsGridRow = ({ name, stat }) => {
  const { modifyBaseStat, modifyBaseSwap } = useCharacterManager();
  const classes = useStyles();

  const handleUpdateStat = useCallback(stat => {
    modifyBaseStat(name, stat);
  }, [modifyBaseStat, name]);

  const handleUpdateSwap = useCallback(stat => {
    modifyBaseSwap(name, stat);
  }, [modifyBaseSwap, name]);

  return (
    <main className={classes.root}>
      <div className={classes.name}>{name}</div>
      <StatInput updateStat={handleUpdateStat} stat={stat?.raw} min="0" max="50" />
      <StatInput updateStat={handleUpdateSwap} stat={stat?.swap} min="-3" max="3" />
      <div>{stat?.uneq}</div>
      <div>{stat?.final}</div>
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
