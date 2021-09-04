import CharStats from 'components/CharStats/CharStats';
import CharQuestModifiers from 'components/CharQuestModifiers/CharQuestModifiers';
import CharElectiveModifiers from 'components/CharElectiveModifiers/CharElectiveModifiers';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
}, { name: 'Mui_Styles_CharacterDetails' });

const CharacterDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CharStats />
      <CharQuestModifiers />
      <CharElectiveModifiers />
    </div>
  );
};

export default CharacterDetails;
