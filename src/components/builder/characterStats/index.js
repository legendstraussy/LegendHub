import { makeStyles } from '@material-ui/styles';
import QuestModifiers from 'components/builder/questModifiers';
import ElectiveModifiers from 'components/builder/electiveModifiers';
import StatsGrid from 'components/builder/statsGrid';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}, { name: 'Mui_Styles_CharacterStats' });

const CharacterStats = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <StatsGrid />
      <QuestModifiers />
      <ElectiveModifiers />
    </main>
  );
};

export default CharacterStats;
