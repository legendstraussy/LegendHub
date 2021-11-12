import { useState } from 'react';
import CharacterStats from 'components/builder/characterStats';
import QuestModifiers from 'components/builder/questModifiers';
import ElectiveModifiers from 'components/builder/electiveModifiers';
import CharacterFinal from 'components/builder/characterFinal';
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
          <CharacterStats onFinalClick={() => setShowFinal(true)} />
          {/* <QuestModifiers />
          <ElectiveModifiers /> */}
        </>
      ) : (
        <CharacterFinal onStatsClick={() => setShowFinal(false)} />
      )}
    </div>
  );
};

export default CharacterDetails;
