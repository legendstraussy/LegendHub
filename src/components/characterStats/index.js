import { useState } from 'react';
import StatsEdit from 'components/statEdit';
import QuestModifiers from 'components/questModifiers';
import ElectiveModifiers from 'components/electiveModifiers';
import CharacterFinal from 'components/characterFinal';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
}, { name: 'Mui_Styles_CharacterDetails' });

const CharacterDetails = () => {
  const [showFinal, setShowFinal] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!showFinal ? (
        <>
          <StatsEdit onFinalClick={() => setShowFinal(true)} />
          <QuestModifiers />
          <ElectiveModifiers />
        </>
      ) : (
        <CharacterFinal onStatsClick={() => setShowFinal(false)} />
      )}
    </div>
  );
};

export default CharacterDetails;
