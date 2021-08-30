import CharacterSelect from 'components/CharacterSelect/CharacterSelect';
import HeathStats from 'components/HealthStats/HealthStats';
import BaseStats from 'components/BaseStats/BaseStats';
import GenericStats from 'components/GenericStats/GenericStats';
import MeleeStats from 'components/MeleeStats/MeleeStats';
import SpellStats from 'components/SpellStats/SpellStats';
import RangeStats from 'components/RangeStats/RangeStats';
import RegenStats from 'components/RegenStats/RegenStats';
import { makeStyles } from '@material-ui/styles';

const baseStats = {
  con: 72,
  dex: 60,
  min: 113,
  per: 40,
  spi: 43,
  str: 19,
};

const genericStats = {
  ac: -127,
  align: 'GNE',
  rent: 53273,
};

const meleeStats = {
  hitroll: -22,
  damroll: -32,
  mitigation: 3,
};

const rangeStats = {
  accuracy: 10,
};

const spellStats = {
  spellCrit: 78,
  spellDam: 85,
  spellRedux: 47,
  concentration: 30,
};

const regenStats = {
  hpRegen: 5,
  mvRegen: 2,
  maRegen: 30,
};

const useStyles = makeStyles({
  root: {
    padding: '.5em',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    borderRadius: '5px',
    cursor: 'default',
  },
}, { name: 'Mui_Styles_CharacterMarquee' });

const CharacterMarquee = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CharacterSelect />
      <HeathStats />
      <BaseStats stats={baseStats} />
      <GenericStats stats={genericStats} />
      <MeleeStats stats={meleeStats} />
      <RangeStats stats={rangeStats} />
      <SpellStats stats={spellStats} />
      <RegenStats stats={regenStats} />
    </div>
  );
};

export default CharacterMarquee;
