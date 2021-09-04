import { useState } from 'react';
import CharStats from 'components/CharStats/CharStats';
import CharQuestModifiers from 'components/CharQuestModifiers/CharQuestModifiers';
import CharElectiveModifiers from 'components/CharElectiveModifiers/CharElectiveModifiers';
import CharacterFinal from 'components/CharacterFinal/CharacterFinal';
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
    <>
      {!showFinal ? (
        <div className={classes.root}>
          <CharStats onFinalClick={() => setShowFinal(true)} />
          <CharQuestModifiers />
          <CharElectiveModifiers />
        </div>
      ) : (
        <div className={classes.root}>
          <CharacterFinal onStatsClick={() => setShowFinal(false)} />
        </div>
      )}
    </>
  );
};

export default CharacterDetails;
