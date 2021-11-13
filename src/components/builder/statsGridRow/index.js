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
}, { name: 'Mui_Styles_StatsGridRow' });

const StatsGridRow = ({ name, stat }) => {
  const { updateStat } = useCharacterManager();
  const classes = useStyles();

  const handleUpdateStat = useCallback(stat => {
    updateStat(name, stat);
  }, [updateStat, name]);

  return (
    <main className={classes.root}>
      <div>{name}</div>
      <StatInput updateStat={handleUpdateStat} stat={stat.raw} />
      {/* <StatInput fn={handleUpdateStat} stat={stat.swap} /> */}
      <div>{stat.swap}</div>
      <div>{stat.uneq}</div>
      <div>{stat.final}</div>
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
