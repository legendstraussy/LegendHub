import { Divider } from '@material-ui/core';
import CharacterSelect from 'components/characterSelect';
import HeathStats from 'components/characterMarquee/marqueeStats/health';
import BaseStats from 'components/characterMarquee/marqueeStats/main';
import GenericStats from 'components/characterMarquee/marqueeStats/general';
import MeleeStats from 'components/characterMarquee/marqueeStats/melee';
import SpellStats from 'components/characterMarquee/marqueeStats/spell';
import RangeStats from 'components/characterMarquee/marqueeStats/range';
import RegenStats from 'components/characterMarquee/marqueeStats/regen';
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
    height: '36px',
    margin: '0 0 .2em 0',
    padding: '.5em',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    borderRadius: '5px',
    cursor: 'default',
  },
  divider: {
    backgroundColor: 'rgba(105, 85, 85, .75)',
    marginRight: '.5em',
  },
}, { name: 'Mui_Styles_CharacterMarquee' });

const CharacterMarquee = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CharacterSelect />
      <Divider orientation="vertical" className={classes.divider} />
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
