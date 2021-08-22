import CharacterSelect from 'components/CharacterSelect/CharacterSelect';
import HeathStats from 'components/HealthStats/HeathStats';
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
  parry: 0,
  damcap: 0,
};

const rangeStats = {
  accuracy: 0,
};

const spellStats = {
  spellCrit: 78,
  spellDam: 85,
  spellRedux: 47,
  concentration: 30,
  spellFail: 0,
};

const regenStats = {
  hpRegen: 5,
  mvRegen: 3,
  maRegen: 30,
};

const useStyles = makeStyles({
  root: {
    padding: '.5em',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .75)',
    borderRadius: '5px',
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
      <SpellStats stats={spellStats} />
      <RangeStats stats={rangeStats} />
      <RegenStats stats={regenStats} />
    </div>
  );
};

export default CharacterMarquee;
